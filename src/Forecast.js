import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="forecastIcon" id="day1">
        <img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></img>
      </div>{" "}
      <div className="forecastDescription" id="day1">
        <h5>
          {" "}
          <strong>12:00</strong>
          <br />
          Partly Cloudy 12°C
        </h5>
      </div>
      <div className="forecastIcon" id="day2">
        <img src="http://openweathermap.org/img/wn/03d@2x.png" alt=""></img>
      </div>
      <div className="forecastDescription" id="day2">
        <h5>
          {" "}
          <strong>14:00</strong>
          <br />
          Cloudy 9°C
        </h5>
      </div>
      <div className="forecastIcon" id="day3">
        <img src="http://openweathermap.org/img/wn/09d@2x.png" alt=""></img>
      </div>
      <div className="forecastDescription" id="day3">
        <h5>
          {" "}
          <strong>16:00</strong>
          <br />
          Rain 9°C
        </h5>
      </div>
      <div className="forecastIcon" id="day4">
        <img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></img>
      </div>
      <div className="forecastDescription" id="day4">
        <h5>
          {" "}
          <strong>18:00</strong>
          <br />
          Partly Cloudy 10°C
        </h5>
      </div>
      <div className="forecastIcon" id="day5">
        <img src="http://openweathermap.org/img/wn/50d@2x.png" alt=""></img>
      </div>
      <div className="forecastDescription" id="day5">
        <h5>
          {" "}
          <strong>20:00</strong>
          <br />
          Fog 8°C
        </h5>
      </div>
    </div>
  );
}
