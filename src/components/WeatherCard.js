import React from 'react';
import './WeatherCard.css'
import { UilTemperatureEmpty } from '@iconscout/react-unicons';
import { UilTear } from '@iconscout/react-unicons';
import { UilWind } from '@iconscout/react-unicons';
const WeatherCard = ({climate,icon,city, temperature, wind, humidity }) => {
  return (
    <>
    <div className="c">
    <div className="card-body">

    <h2 className="card-title">{city}
    <span className="pc1">{icon}</span>
    </h2>
    
    <h4 className="card-text">
    <UilTemperatureEmpty size={25}/><span className='s'>Temperature: </span><span className="s1">{temperature}°C</span>
    <br />
    <UilWind size={25}/>&nbsp;<span className='s'>Wind: </span><span className="s1">{wind} km/h</span>
    <br />
    <UilTear size={25}/>&nbsp;<span className='s'>Humidity: </span><span className="s1">{humidity}%</span>
    </h4>
    </div>
    </div>
    </>
    );
};

export default WeatherCard;
