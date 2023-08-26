export interface CurrentWeatherI {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  country: CountryI;
  city_name: string;
  forecast: ForecastI;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface CountryI {
  name: Name;
  capital: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  aym: Aym;
  que: Aym;
  spa: Aym;
}

export interface Aym {
  official: string;
  common: string;
}

/* Forecast */
export type ForecastI = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

export type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type CoordForecast = {
  lat: number;
  lon: number;
};

export type List = {
  dt: number;
  main: MainClassI;
  weather: WeatherForecastI[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: SysForecast;
  dt_txt: Date;
};

export type MainClassI = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type SysForecast = {
  pod: Pod;
};

export enum Pod {
  D = "d",
  N = "n",
}

export type WeatherForecastI = {
  id: number;
  main: MainEnum;
  description: Description;
  icon: string;
};

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
}
