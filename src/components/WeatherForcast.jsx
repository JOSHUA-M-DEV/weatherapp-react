import React, { useState, useEffect } from 'react';
import { formatetolocaltime, iconUrlFormCode } from '../Ser';
import './WeatherForcast.css';

const WeatherForecast = () => {
  const [dailyForecast, setDailyForecast] = useState([]);
  const API_key = '493182a8712c7f267b99797539a8f75e';

  useEffect(() => {
    const fetchDailyForecast = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=493182a8712c7f267b99797539a8f75e'
        );
        const data = await response.json();
        setDailyForecast(data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDailyForecast();
  }, []);

  // Map weather condition codes to corresponding icons
  const getWeatherIcon = (conditionCode) => {
    // You can expand this mapping as needed
    switch (conditionCode) {
      // ... (rest of your code remains unchanged)
    }
  };

  // Render daily forecast data
  return (
    <div className="wrapper">
      <h2>Daily Weather Forecast</h2>
      <div className="forecast-container">
        {dailyForecast.map((forecast) => (
          <div key={forecast.dt} className="forecast-item">
            <img src={iconUrlFormCode(forecast.weather[0].icon)} alt="Weather Icon" width="100px" />
            <div>Temperature: {`${(forecast.temp.day - 273.15).toFixed()}°`}C</div>
            <div>Description: {forecast.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
