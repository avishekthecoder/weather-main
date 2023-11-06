import React, { useState, useEffect } from 'react';
import InputForm from './Components/InputForm';
import WeatherResult from './Components/WeatherResult';
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  }

  const fetchWeatherData = async () => {
    try {
      // Make the API request to fetch weather data for the specified city
      const response = await fetch(`https://exp-weather-spring-app-weather-me.azuremicroservices.io/weather?city=${city}`);
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('An error occurred while fetching weather data', error);
    }
  }

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
      <div>
        <h1>Weather Forecast App</h1>
        <InputForm city={city} onCityChange={handleCityChange} onFetchData={fetchWeatherData} />
        <WeatherResult data={weatherData} />
      </div>
  );
}

export default App;
