import React, { useState, useEffect } from "react";
import { BiSolidMap, BiSearch, BiWater, BiWind } from "react-icons/bi";
import Error from "./Error";
const WeatherCard = ({
	onSearch,
	temp,
	humidity,
	windSpeed,
	description,
	icon,
	city,
	country,
	error,
}) => {
	const [query, setQuery] = useState("");

	// Set default data for Kolkata
	useEffect(() => {
		onSearch("kolkata");

		// Cleanup function to prevent unnecessary API calls on component unmount
		return () => {};
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		onSearch(query);
		setQuery("");
	};

	return (
		<form
			onSubmit={submitHandler}
			className="custom-container relative w-[450px] h-[580px] bg-purple-800 rounded-xl p-6 text-white ">
			<div className="relative w-full h-14 flex items-center ">
				<div className="px-2">
					<BiSolidMap size={30} />
				</div>

				<input
					className="absolute w-full h-full bg-transparent uppercase border-2 border-white  outline-none rounded-md text-2xl font-medium px-10"
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter Your Location"
				/>
				<button
					type="submit"
					className="absolute right-0 w-10 h-full bg-transparent border-none outline-none text-2xl text-white pr-10 pl-1 cursor-pointer">
					<BiSearch />
				</button>
			</div>

			{error ? (
				<Error />
			) : (
				<>
					<div className="pt-5">
						<h1 className="font-medium text-xl">
							Weather for {city}, {country}
						</h1>
					</div>

					<div className="text-center ">
						<img
							className="mx-auto"
							src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
							alt="weather data"
						/>
						<p className="relative font-bold text-6xl">
							{Math.floor(temp)}
							<span className="absolute text-3xl ml-1">&deg;C</span>
						</p>
						<p className="text-xl font-medium p-5 capitalize">{description}</p>
					</div>

					<div className="absolute flex bottom-10 w-[100%] p-2">
						<div className="flex items-center w-[50%] ">
							<BiWater size={70} />
							<div className="p-2">
								<span className="inline-block text-xl font-medium">
									{humidity}%
								</span>
								<p className="text-sm font-medium">Humidity</p>
							</div>
						</div>

						<div className="flex items-center w-[50%]">
							<BiWind size={70} />
							<div className="p-2">
								<span className="inline-block text-xl font-medium">
									{windSpeed} km/h
								</span>
								<p className="text-sm font-medium">Wind Speed</p>
							</div>
						</div>
					</div>
				</>
			)}
		</form>
	);
};

export default WeatherCard;
