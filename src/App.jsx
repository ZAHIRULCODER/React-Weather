import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState([]);

	useEffect(() => {
		if (query !== "") {
			getWeather();
		}
	}, []);

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=b5b11a99de4ddbfd60181db3aeded6da`;

	const getWeather = async () => {
		const response = await Axios.get(url);
		setWeather(response.data);
	};

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	const handleOnClick = () => {
		getWeather();
		setQuery("");
	};

	return (
		<div className="App">
			<Search handleOnChange={handleOnChange} query={query} handleOnClick={handleOnClick} />
			{weather.main && (
				<Weather
					city={weather.name}
					country={weather.sys.country}
					temp={Math.round(weather.main.temp)}
					feelsLike={Math.round(weather.main.feels_like)}
					humidity={weather.main.humidity}
					description={weather.weather[0].description}
					windSpeed={weather.wind.speed}
					icon={weather.weather[0].icon}
				/>
			)}
		</div>
	);
};

export default App;
