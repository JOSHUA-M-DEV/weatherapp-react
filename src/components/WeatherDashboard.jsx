import React from 'react';
import WeatherCard from './WeatherCard'; // Assuming you've created this component
import './WeatherDash.css'
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import StormIcon from '@mui/icons-material/Storm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
const WeatherDashboard = () => {
  // Sample data (replace with actual API data)
  const cities = [
    { name: 'Chennai',climate:'cloudy',icon:<CloudIcon/>, temperature: 34, wind: 11, humidity: 65 },
    { name: 'Bangalore',climate:'cloudy',icon:<WbSunnyIcon/>, temperature: 29, wind: 13, humidity: 70 },
    { name: 'Delhi',climate:'cloudy',icon:<ThunderstormIcon/>, temperature: 30, wind: 10, humidity: 60 },
    { name: 'Mumbai',climate:'cloudy',icon:<AcUnitIcon/>, temperature: 28, wind: 12, humidity: 70 },
    { name: 'Kolkata',climate:'cloudy',icon:<StormIcon />, temperature: 33, wind: 15, humidity: 78 },
    { name: 'Punjab',climate:'cloudy',icon:<SevereColdIcon/>, temperature: 32, wind: 13, humidity: 69 },
    // Add more cities...
  ];

  return (
    <div className="container">
      <h1 className="h11 py-10 text-xl">Top Cities Weather</h1>
      <div className="row">
        {cities.map((city) => (
          <div className="col-md-4" key={city.name}>
            <WeatherCard climate={city.climate}
            icon={city.icon}
              city={city.name}
              temperature={city.temperature}
              wind={city.wind}
              humidity={city.humidity}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
