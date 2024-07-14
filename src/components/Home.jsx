import React, { useEffect, useState } from "react";
import "./Home.css";
import Top from "./Top";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icontab from "./Icontab";
import Locationtab from "./Locationtab";
import Teptab from "./Teptab";
import { useTheme } from "../components/Themeprovider";
import getweather from "../server";
import getformatecurweather from "../Ser";
const Home = () => {
  const [query, setQuery] = useState({ q: "chennai" });
  const [units, setUnits] = useState({ q: "metric" });
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const message = query.q ? query.q : "current location.";
    toast.info("Fetching Weather for " + message);
    const wea = async () => {
      await getformatecurweather({ ...query, units }).then((data) => {
        toast.success(`Successfully fetched weather for ${data.name}`);
        setWeather(data);
      });
    };
    wea();
  }, [query, units]);
  const back1 = () => {
    if (!weather) {
      return "from-cyan-700 to to-blue-400";
    }

    if (weather.temp - 273.15 <= 20) return "from-cyan-700 to-blue-700";
    else return "from-yellow-700 to-orange-700";
  };
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${back1()}`}
    >
      <Top setQuery={setQuery} />
      <Icontab setQuery={setQuery} units={units} setUnit={setUnits} />
      {weather && (
        <div>
          <Locationtab weather={weather} />
          <Teptab weather={weather} />
        </div>
      )}
      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
    </div>
  );
};

export default Home;
