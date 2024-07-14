import React from "react";
import "./Abc.css";
import img1 from ".//Image/sun1.jpg.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PlaceIcon from "@mui/icons-material/Place";
import AirIcon from "@mui/icons-material/Air";
class Abc extends React.Component {
  render() {
    return (
      <div className="a text-3xl  font-bold">
        <div class="p">
          <img class="d" src={img1}></img>
        </div>
        <div className="b">
          <center>
            <img
              class="v"
              src={"https://cdn-icons-png.flaticon.com/512/3767/3767036.png"}
            ></img>
            <h1 className="wel">
              <b>WELCOME!!</b>
            </h1>
            <p>
              There are six main components, or parts, of weather. They are
              temperature, atmospheric pressure, wind, humidity, precipitation,
              and cloudiness. Together, these components describe the weather at
              any given time.
            </p>
          </center>
        </div>
      </div>
    );
  }
}
export default Abc;
