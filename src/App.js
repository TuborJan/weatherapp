import React, { useState } from "react";
import axios from "axios";
import "./styles/App.scss";
import { WeatherScreen } from "./components/WeatherScreen/WeatherScreen";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1e42312d042b4f31c20395c13a3ca786`;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          alert("Something goes wrong. Please try again");
          console.log(error);
        });
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
