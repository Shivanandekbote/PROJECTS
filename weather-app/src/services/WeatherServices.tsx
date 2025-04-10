import React from 'react';
import { formatTemperature } from '../utils/helper';

export interface WeatherData {
  name: string; // City name
  main: {
    temp: number; // Temperature in Celsius
  };
  weather: {
    description: string; // Weather description
  }[];
}

export class WeatherService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async fetchWeather(city: string): Promise<WeatherData> {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
      const data: WeatherData = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
}

export default WeatherService;