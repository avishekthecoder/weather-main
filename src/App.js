import React, { useEffect, useState } from 'react';
import InputForm from './Components/InputForm';
import WeatherResult from './Components/WeatherResult';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    description: '',
    temp: 0,
    pressure: 0,
    humidity: 0,
    // name: '',
    hourly: [],
    daily: [],
  });

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const fetchWeatherData = async () => {
    try {
      if (!city) return; // Don't make a request if the city is not provided

      // const response = await fetch(`https://weather-me-weather-me.azuremicroservices.io/weather?city=${city}`);
      const response = await fetch(`http://localhost:8080/weather?city=${city}`);

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('An error occurred while fetching weather data', error);
    }
  };

  useEffect(() => {
    // Fetch data only if a city is provided
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
      <div className="app-container">
        <h1 className="app-title">Weather Forecast App</h1>
        <InputForm city={city} onCityChange={handleCityChange} onFetchData={fetchWeatherData} />
        {weatherData && <WeatherResult data={weatherData} />}
      </div>
  );
};

export default App;
