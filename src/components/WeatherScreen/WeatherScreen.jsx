import React from "react";
import "./WeatherScreen.scss";

const WeatherScreen = ({ data }) => {
  const getData = (data) => {
    let d = new Date(data * 1000);
    let hh = d.getHours();
    let min = ("0" + d.getMinutes()).slice(-2);
    return `${hh}:${min}`;
  };

  let url = "";

  if (data) {
    url = `./img/${data.weather[0].icon}.png`;
  }

  return (
    <div className="WeatherScreen">
      {data ? (
        <div className="container">
          <div className="location">
            <div className="img">
              <img src={url} alt="weaher icon" />
            </div>
            <div className="city">{data.name}</div>
            <div className="time">{`${getData(data.dt)}`}</div>
          </div>

          <div className="temperature">
            {`${Math.round((data.main.temp - 273.15) * 10) / 10}`}
            <span>°C</span>
          </div>
          <div className="main">{data.weather[0].main}</div>

          <div className="weather">
            <div className="feelsLike">
              {`Fells like ${
                Math.round((data.main.feels_like - 273.15) * 10) / 10
              } C`}
            </div>
            <div className="wind">{`Wind ${data.wind.speed} m/h`}</div>
            <div className="humidity">{`Humidity ${data.main.humidity}`}</div>
            <div className="pressure">{`Pressure ${data.main.pressure}`}</div>
          </div>
        </div>
      ) : (
        <div className="alert">
          <h1>Enter your location</h1>
        </div>
      )}
    </div>
  );
};

export default WeatherScreen;
