import React, { useState } from "react";
import { weatherRequest } from "../API/API";

const WeatherScreen = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      weatherRequest(location, setData);
    }
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.main.temp}</p>
      <input
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={search}
        placeholder="Enter your location"
        type="text"
      />
    </div>
  );
};

export default WeatherScreen;
