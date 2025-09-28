import { useState, useEffect } from "react";
import { BiSolidMap, BiSearch, BiWater, BiWind } from "react-icons/bi";
import { Error } from "./Error";
import { LoadingSpinner } from "./LoadingSpinner";

export function WeatherCard({
   onSearch,
   temp,
   humidity,
   windSpeed,
   description,
   icon,
   city,
   country,
   error,
   loading,
}) {
   const [query, setQuery] = useState("");

   // Set default data for Kolkata
   useEffect(() => {
      onSearch("kolkata");
   }, []);

   const submitHandler = (e) => {
      e.preventDefault();
      onSearch(query);
      setQuery("");
   };

   return (
      <form
         onSubmit={submitHandler}
         className="custom-container relative w-[450px] h-[580px] bg-purple-800 rounded-xl p-6 text-white"
      >
         <div className="relative w-full h-14 flex items-center ">
            <div className="px-2">
               <BiSolidMap size={30} />
            </div>

            <input
               className="absolute w-full h-full bg-transparent border-2 border-white outline-none rounded-md text-2xl font-medium px-10"
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Enter Your Location"
            />
            <button
               type="submit"
               className="absolute right-0 w-10 h-full bg-transparent border-none outline-none text-2xl text-white pr-10 pl-1 cursor-pointer"
            >
               <BiSearch />
            </button>
         </div>

         {loading ? (
            <LoadingSpinner />
         ) : error ? (
            <Error />
         ) : (
            <div className="animate-fade-in">
               {/* City/Country Header */}
               <div className="pt-5">
                  <h1 className="font-medium text-xl text-center">
                     Weather for {city}, {country}
                  </h1>
               </div>

               {/* Weather Icon and Details */}
               <div className="text-center mt-4">
                  <img
                     className="mx-auto w-32 h-32"
                     src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                     alt={`Weather icon showing ${description}`}
                  />
                  <p className="flex items-start justify-center font-bold text-6xl mt-2">
                     {Math.floor(temp)}
                     <span className="text-3xl ml-1 mt-1">&deg;C</span>
                  </p>
                  <p className="text-xl font-medium mt-4 capitalize">
                     {description}
                  </p>
               </div>

               {/* Humidity and Wind Speed */}
               <div className="flex justify-between items-center mt-8 px-4 pb-4">
                  <div className="flex items-center space-x-2">
                     <BiWater size={50} className="text-blue-300" />
                     <div>
                        <span className="block text-xl font-medium">
                           {humidity}%
                        </span>
                        <p className="text-sm font-medium text-gray-200">
                           Humidity
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-2">
                     <BiWind size={50} className="text-green-300" />
                     <div>
                        <span className="block text-xl font-medium">
                           {windSpeed} km/h
                        </span>
                        <p className="text-sm font-medium text-gray-200">
                           Wind Speed
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </form>
   );
}
