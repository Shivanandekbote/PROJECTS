import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay.tsx';
import WeatherService from './services/WeatherServices.tsx';

interface WeatherData {
  weather: string;
  temperature: number;
}

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const weatherService = new WeatherService('YOUR_API_KEY'); // Replace with your API key
    weatherService
      .fetchWeather('London')
      .then((data) => {
        setWeatherData({
          weather: data.weather[0].description,
          temperature: data.main.temp,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        {weatherData ? (
          <WeatherDisplay weatherData={weatherData} />
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
};

export default App;
