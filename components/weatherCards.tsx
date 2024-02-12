import React from "react";
import WeatherCard from "./weatherCard";
import { cn } from "@/lib/utils";
import { cityWeatherType, citiesWeatherType } from "../types/cityWeatherType";

type CardsProps = {
  className?: string;
  cities: citiesWeatherType;
};

function WeatherCards({ className = "", cities = [] }: CardsProps) {
  return (
    <div
      className={cn(
        className,
        "z-10 py-5 max-w-6xl w-full items-center  font-mono text-sm flex flex-wrap sm:justify-center md:justify-between"
      )}
    >
      {cities.map((cityWeather: cityWeatherType, index) => {
        return (
          <div key={index} className="w-full  md:w-1/2 lg:w-1/3 my-3 px-2">
            <WeatherCard cityWeather={cityWeather} />
          </div>
        );
      })}
    </div>
  );
}

export default WeatherCards;
