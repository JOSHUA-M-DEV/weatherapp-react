import React, { useState, useEffect } from "react";
import "./TopCard.css";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const TopCard = ({ cities }) => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const promises = cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ae4ea577ce9dcbc32b38799a2653a59`
        );
        return response.json();
      });

      const data = await Promise.all(promises);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [cities]);

  return (
    <div className="weatherout">
      {weatherData.map((weather, index, ul) => (
        <div className="citydiv" key={index}>
          <h1 className="Til" style={{ fontSize: "1.5em" }}>
            {weather.name}
          </h1>

          <h4>
            <table>
              <tr>
                <td>
                  <span className="sc">Temperature: </span>
                  <span className="ssc">
                    {`${(weather.main.temp - 273.15).toFixed()}°`} C
                  </span>
                </td>
                <td>
                  &emsp;&emsp;<span className="sc">Low: </span>
                  <span className="ssc">
                    {`${(weather.main.temp_min - 273.15).toFixed()}°`} C
                  </span>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  &emsp;&emsp;<span className="sc">High: </span>
                  <span className="ssc">
                    {`${(weather.main.temp_max - 273.15).toFixed()}°`} C
                  </span>
                </td>
              </tr>
            </table>
            <span className="sc">Pressure: </span>
            <span className="ssc">{weather.main.pressure} hPa</span>
            <br></br>
            <span className="sc">Humidity: </span>
            <span className="ssc">{weather.main.humidity} %</span>
            <br></br>
            <span className="sc">Wind: </span>
            <span className="ssc">
              {`${(weather.wind.speed * 3.6).toFixed()} `}km/hr
            </span>
            <br></br>
            <span className="sc">Weather: </span>
            <span className="ssc">{weather.weather[0].description}</span>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TopCard;
