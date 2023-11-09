import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import WeatherCard from "./components/WeatherCard";

const App = () => {
	const [weatherData, setWeatherData] = useState([]);
	const [error, setError] = useState(false);

	const handleSearch = async (query) => {
		try {
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
					import.meta.env.VITE_API_KEY
				}&units=metric`
			);
			console.log(response?.data);
			setWeatherData(response.data);
			setError(false);
		} catch (error) {
			setError(true);
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
		/>
	);
};

export default App;
