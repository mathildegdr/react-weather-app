import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />
      <h3>{props.data.city}</h3>
      <ul>
        <li>{props.data.description}</li>
      </ul>
      <WeatherIcon code={props.data.icon} />
      <WeatherTemperature celsius={props.data.temperature} />
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
