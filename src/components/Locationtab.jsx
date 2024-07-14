import React from "react";
import { formatetolocaltime } from "../Ser";

function Locationtab({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="text-center justify-center flex  my-6">
        <p className="text-white texr-xl font-extralight">
          {formatetolocaltime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name},${country}`}</p>
      </div>
    </div>
  );
}

export default Locationtab;
