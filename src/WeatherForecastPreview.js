import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./App.css";
import "./Forecast.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="containerForecast">
      <div className="WeatherForecastPreview">
        <div className="forecastIcon">
          <ForecastIcon code={props.data.weather[0].icon} />
        </div>
        <div className="forecastDescription">
          <h5>
            <strong>{hours()}</strong>
            <br />
            {temperature()}
          </h5>
        </div>
      </div>
    </div>
  );
}
