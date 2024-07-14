import React from "react";
import "./Frontpage.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Frontpage = () => {
  return (
    <>
      <div className="weather-info">
        <h1 className="head1">Weatherly</h1>
        <p className="para1">Your go-to weather app for accurate forecasts!</p>
        <ul className="uli">
          <li className="lis">Real-time weather data</li>
          <li className="lis">5-day forecast</li>
          <li className="lis">Search by city or location</li>
        </ul>
        <button type="submit" className="but">
          <Link to="/abc">Explore</Link>
        </button>
      </div>
      <center>
        <h2 id="wh">Why choose our site?</h2>
      </center>
      <div className="outerfl">
        <div className="innerfl1">
          <h2>01</h2>
          <h2>Accurate Weather Data</h2>
          <span>
            Our app provides real-time weather data sourced from reliable APIs.
            Users can trust the accuracy of the information.
          </span>
        </div>
        <div className="innerfl2">
          <h2>02</h2>
          <h2>User-Friendly Interface</h2>
          <span>
            Our app features an intuitive and clean design. Users can quickly
            access weather details without any hassle.
          </span>
        </div>
        <div className="innerfl3">
          <h2>03</h2>
          <h2>Customizable Experience</h2>
          <span>
            Users can personalize their weather experience by selecting
            preferred units (Celsius/Fahrenheit), dark/light mode, and favorite
            locations.
          </span>
        </div>
      </div>
      <div className="outerfoo">
        <div className="infp">
          <h2>Weatherly</h2>
          <h4>
            {" "}
            We believe weather apps should be elegant and easy to use. No
            clutter, just essential information.
          </h4>
          <a href="https://www.facebook.com/">
            <FacebookIcon id="fc" />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <XIcon id="xi" />
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <InstagramIcon id="igt" />
          </a>
          <LinkedInIcon id="lik" />
        </div>
        <div className="intb">
          <table>
            <tr className="twr">
              <th>Forecast</th>
              <th>
                Weather sheet<br></br> Analysis
              </th>
              <th>Most searched</th>
            </tr>
            <tr className="twr">
              <td className="twd">Hourly Forecast</td>
              <td className="twd">Rainfall</td>
              <td className="twd">Chennai</td>
            </tr>
            <tr className="twr">
              <td className="twd">Daily Forecast</td>
              <td className="twd">Temperature</td>
              <td className="twd">Bangalore</td>
            </tr>
            <tr className="twr">
              <td className="twd">Weekly Forecast</td>
              <td className="twd">Windspeed</td>
              <td className="twd">Mumbai</td>
            </tr>
          </table>
        </div>
      </div>

      <div id="fpf">
        <center>
          <span>Copyright © 2024 weatherly | All rights reserved</span>
        </center>
      </div>
    </>
  );
};

export default Frontpage;
