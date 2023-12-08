import { useState } from "react";
import { CurrentWeatherI } from "../utils/entities";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_BASE = "https://api.openweathermap.org/data/2.5/";

const useFetch = () => {
  const [data, setData] = useState<CurrentWeatherI | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFetch = async (city_name: string) => {
    setData(null);
    setError(null);
    setIsLoading(true);

    try {
      const respWeather = await fetch(
        `${URL_BASE}weather?q=${city_name}&appid=${API_KEY}&units=metric`
      );

      if (!respWeather.ok) {
        throw new Error(`Request failed with status: ${respWeather.status}`);
      }

      const responseDataWeather: CurrentWeatherI = await respWeather.json();

      const { sys } = responseDataWeather;
      const { country } = sys;

      const resCountry = await fetch(
        `https://restcountries.com/v3.1/alpha/${country}?fields=name,capital`
      );

      const responseDataCountry = await resCountry.json();

      const respForecast = await fetch(
        `${URL_BASE}forecast?lat=${responseDataWeather.coord.lat}&lon=${responseDataWeather.coord.lon}&appid=${API_KEY}&units=metric`
      );

      const respDataForecast = await respForecast.json();

      setData({
        ...responseDataWeather,
        country: responseDataCountry,
        city_name,
        forecast: respDataForecast,
      });
    } catch (error) {
      setError("Not found");
    }

    setIsLoading(false);
  };

  return { data, error, isLoading, getFetch };
};

export default useFetch;
