import React from "react";
import "./TopCities.css";
import WorldCard from "./WorldCard";
const WorldDash = () => {
  const cities = ["London", "New york", "Paris", "Tokyo", "Dubai", "Singapore"];
  return (
    <div className="cont">
      <h1 className="hhw">World's top cities Weather</h1>
      <div className="raa">
        <WorldCard cities={cities} />
      </div>
    </div>
  );
};

export default WorldDash;
