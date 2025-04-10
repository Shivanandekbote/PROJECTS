import React from 'react';
import { formatTemperature } from '../utils/helper.ts';

interface WeatherDisplayProps {
  weatherData: {
    weather: string;
    temperature: number;
  } | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="weather-card">
      <h2>Weather: {weatherData.weather}</h2>
      <p>Temperature: {formatTemperature(weatherData.temperature, 'C')}</p>
    </div>
  );
};

export default WeatherDisplay;
