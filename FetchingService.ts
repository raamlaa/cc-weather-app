import axios from "axios";

type CityCoordinates = {
  [key: string]: { latitude: number; longitude: number };
};

const cities_coordination:CityCoordinates = {
  Tunis: {
    latitude: 36.8065,
    longitude: 10.1815,
  },
  Sfax: {
    latitude: 34.7406,
    longitude: 10.7603,
  },
  Mannouba: {
    latitude: 36.8101,
    longitude: 10.0969,
  },
  Soukra: {
    latitude: 36.8962,
    longitude: 10.2374,
  },
};

async function fetchWeatherData(city: string) {

  console.log("test : ",cities_coordination[city].latitude)
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${cities_coordination[city].latitude}&lon=${cities_coordination[city].longitude}&appid=408be8e91cc322940505e4cb63a11a91`;
  try {
    const response = await axios.get(apiUrl);
    return {
      weatherData: {
        Temperature: response.data.main.temp,
        Prediction: response.data.weather[0].main,
        Description: response.data.weather[0].description,
        TommorowTemperature: response.data.main.temp + 2,
      },
      cityName: response.data.name,
    };
  } catch (error: any) {
    console.error("Error fetching weather data:", error.message);
    return null;
  }
}

export default fetchWeatherData;
