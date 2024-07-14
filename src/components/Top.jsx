import React from 'react'

function Top({setQuery}) {
    const cities=[
        {
            id:1,
            cityname:"Chennai"

    },
        {
            id:2,
            cityname:"London"

    },
        {
            id:3,
            cityname:"Paris"

    },
        {
            id:4,
            cityname:"Bangalore"

    },
        {
            id:5,
            cityname:"Tokyo"

    },
]
  return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city)=>(
        <button key={city.id} className="text-white text-lg font-medium " onClick={()=>setQuery({q: city.cityname})}>{city.cityname}</button>
  ))}
    </div>
  )
}

export default Top