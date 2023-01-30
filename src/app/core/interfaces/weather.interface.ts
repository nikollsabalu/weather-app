export interface HourlyForcastResponse {
  main: Main;
  dt_txt?: string;
}

export interface ForecastResponse {
  main: Main;
  weather: Weather[];
  dt_txt?: string;
}

export interface TodayWeatherResponse {
  main: Main;
  wind: Wind;
  weather: Weather[];
  visibility: number;
}

export interface Weather {
  main: string;
  description: string;
}

export interface Main {
  temp_max: number;
  temp_min: number;
  humidity: number;
  pressure?: number;
  temp: string;
  feels_like: string;
  sea_level: number
}

export interface Wind {
  speed: string;
}


