import "./index.css";
import axios from "axios";
import { useState } from "react";
import { WeatherCard } from "./components/WeatherCard";

export default function App() {
   const [weatherData, setWeatherData] = useState({});
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const handleSearch = async (query) => {
      setLoading(true);
      try {
         const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
               import.meta.env.VITE_API_KEY
            }&units=metric`
         );
         // console.log(response?.data);
         setWeatherData(response.data);
         setError(false);
         setLoading(false);
      } catch (error) {
         setError(true);
         setWeatherData({});
         setLoading(false);
         console.log(error);
      }
   };

   return (
      <WeatherCard
         onSearch={handleSearch}
         temp={weatherData?.main?.temp}
         humidity={weatherData?.main?.humidity}
         windSpeed={weatherData?.wind?.speed}
         description={weatherData?.weather?.[0]?.description}
         icon={weatherData?.weather?.[0]?.icon}
         city={weatherData?.name}
         country={weatherData?.sys?.country}
         error={error}
         loading={loading}
      />
   );
}
