import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Icontab({ setQuery, units, setUnits }) {
  const [inputtex, setinputtex] = useState("");
  const ch = (e) => {
    setinputtex(e.target.value);
  };
  const ch1 = () => {
    if (inputtex !== "") setQuery({ q: inputtex });
  };
  const chunit = (e) => {
    const selectu = e.target.name;
    if (units !== selectu) {
      setUnits({ q: selectu });
    }
  };
  const handloc = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="flex flex-row my-6 justify-center">
      <div className="flex flex-row w-3/4 justify-center space-x-4 ">
        <input
          type="text"
          value={inputtex}
          onChange={ch}
          placeholder="search for City..."
          className="text-xl font-light p-2 capitalize w-full shadow-xl focus:outline-none placeholder:lowercase"
        ></input>
        <UilSearch
          size={30}
          onClick={ch1}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handloc}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-white text-xl font-light hover:scale-125 transition ease-out"
          onClick={chunit}
        >
          °C
        </button>
        <p className="text-white text-xl font-light mx-2">|</p>
        <button
          name="imperial"
          className="text-white text-xl font-light hover:scale-125 transition ease-out"
          onClick={chunit}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Icontab;
