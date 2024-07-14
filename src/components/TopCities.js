import React from "react";
import TopCard from "./TopCard";
import "./TopCities.css";
const TopCities = () => {
  const cities = [
    "Chennai",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Kolkata",
    "Hyderabad",
  ];

  return (
    <div className="cont">
      <h1 style={{ fontSize: "2em", color: "white", fontWeight: "bold" }}>
        India's top cities Weather
      </h1>
      <div className="raa">
        <TopCard cities={cities} />
      </div>
    </div>
  );
};

export default TopCities;
