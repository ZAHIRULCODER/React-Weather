import React from "react";

const Weather = (props) => {
	const { city, country, temp, icon, description, feelsLike, humidity, windSpeed } = props;

	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const currentDay = daysOfWeek[new Date().getDay()];

	const currentDate = new Date().toLocaleString("default", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const currentTime = new Date().toLocaleTimeString();

	return (
		<div className="card">
			<h3 className="local-time">
				{currentDay}, {currentDate} | {currentTime}
			</h3>
			<h2 className="city">
				Weather in {city}, {country}
			</h2>
			<h1 className="temp">{temp} °C</h1>
			<div className="flex">
				<img src={`https://openweathermap.org/img/wn/${icon}.png`} className="icon" />
			</div>
			<h4 className="description">{description}</h4>
			<h4 className="feelslike">Feels Like : {feelsLike} °C</h4>
			<h4 className="humidity">Humidity : {humidity} %</h4>
			<h4 className="wind">Wind speed : {windSpeed} m/h</h4>
		</div>
	);
};

export default Weather;
