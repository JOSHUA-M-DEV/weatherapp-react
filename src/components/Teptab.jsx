import React from 'react'
import im1 from './Image/image.png'
import{
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatetolocaltime, iconUrlFormCode } from '../Ser';
function Teptab({weather:{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
  return (
    <div >
    <div className="flex items-center justify-center py-6 tx text-cyan-300">
    <p>{details}</p></div>
    <div className="flex flex-row items-center  py-3 text-white justify-between"><img src={iconUrlFormCode(icon)} className="w-20 "></img>
    <p className="text-5xl">{`${(temp - 273.15).toFixed()}°`}</p>
    <div className="flex flex-col space-y-2">

    <div className="flex font-light text-5m items-center">
    <UilTemperature size={18} className="mr-1" />
    Real fell:
    <span className="font-medium ml-1">{`${(feels_like - 273.15).toFixed()}°`}</span>
    </div>
    <div className="flex font-light text-5m items-center">
    <UilWind size={18} className="mr-1" />
    wind:
    <span className="font-medium ml-1">{`${(speed*3.6).toFixed()}Km/h`}</span>
    </div>
    <div className="flex font-light text-5m items-center">
    <UilTear size={18} className="mr-1" />
    Humidity:
    <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
    </div>
    

    <div>
    </div>
    </div>
    </div>
    <div className="flex flex-row items-center justify-center space-x-1 text-white py-6">
    <UilSun/>
    <p className="font-light ">Rise:<span className="font-medium ml-1">{formatetolocaltime(sunrise, timezone,'hh:mm a')}</span></p>
    <p className="font-light">|</p>
    <UilSunset/>
    <p className="font-light ">Set:<span className="font-medium ml-1">{formatetolocaltime(sunset, timezone,'hh:mm a')}</span></p>
    <p className="font-light">|</p>
    <UilSun/>
    <p className="font-light ">Hight:<span className="font-medium ml-1">{`${(temp_max - 273.15).toFixed()}°`}</span></p>
    <p className="font-light">|</p>
    <UilSun/>
    <p className="font-light ">Low:<span className="font-medium ml-1">{`${(temp_min - 273.15).toFixed()}°`}</span></p>
    
    </div>
    </div>
  )
}

export default Teptab