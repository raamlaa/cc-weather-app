export type cityWeatherType = {
  city: string;
  temperatureToday: number;
  temperatureTomorrow: number;
  precipitationToday: string;
  precipitationTomorrow: string;
};

export type citiesWeatherType = Array<cityWeatherType>;
