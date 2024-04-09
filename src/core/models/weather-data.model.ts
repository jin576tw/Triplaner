export interface WeatherData {
  city: string;
  country: string;
  date: string;
  temperature: number;
  type: string;
  highTemp: number;
  lowTemp: number;
  rainfall: number;
  weathers: WeatherItem[];
}

export interface WeatherItem {
  date: string;
  type: string;
  temperature: number;
}
