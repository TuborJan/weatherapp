import React, { useState } from "react";
import "./styles/App.scss";
import { weatherRequest } from "./components/API/API";
import WeatherScreen from "./components/WeatherScreen/WeatherScreen";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      weatherRequest(location, setData);
    }
  };

  return (
    <div className="App">
      <input
        className="input"
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={search}
        placeholder="Enter your location"
        type="text"
      />
      <WeatherScreen data={data} />
    </div>
  );
}

export default App;
