import React, { useState, useEffect } from "react";
import "./TopCard.css";
import Clock from "react-live-clock"; // Import the Clock component

const WorldCard = ({ cities }) => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const promises = cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ae4ea577ce9dcbc32b38799a2653a59`
        );
        const data = await response.json();

        // Convert UTC timestamp to IST
        const ISTTimestamp = data.dt + 5 * 60 * 60 + 30 * 60;
        data.dt = ISTTimestamp;

        // Convert sunrise and sunset timestamps to IST
        const ISTSunrise = data.sys.sunrise + 5 * 60 * 60 + 30 * 60;
        const ISTSunset = data.sys.sunset + 5 * 60 * 60 + 30 * 60;
        data.sys.sunrise = ISTSunrise;
        data.sys.sunset = ISTSunset;

        return data;
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
    <div className="weatherout" style={{ height: "700px" }}>
      {weatherData.map((weather, index) => (
        <div className="citydiv" key={index} style={{ height: "420px" }}>
          <h1 className="Titl">{weather.name}</h1>
          <h4>
            <span className="sc">Local Time: </span>
            <span className="ssc">
              <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"Asia/Kolkata"}
              />
            </span>
            <br />
            <span className="sc">Sunrise: </span>
            <span className="ssc">
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
            </span>
            <br />
            <span className="sc">Sunset: </span>
            <span className="ssc">
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString("en-IN")}
            </span>
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

export default WorldCard;
