import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./Forecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast ">
        <div className="row" id="firstForecast">
          <div className="col-1">
            <WeatherForecastPreview data={forecast.list[0]} />
          </div>
        </div>
        <div className="row" id="secondForecast">
          <div className="col-1">
            <WeatherForecastPreview data={forecast.list[1]} />
          </div>
        </div>
        <div className="row" id="thirdForecast">
          <div className="col-1">
            <WeatherForecastPreview data={forecast.list[2]} />
          </div>
        </div>
        <div className="row" id="fourthForecast">
          <div className="col-1">
            <WeatherForecastPreview data={forecast.list[3]} />
          </div>
        </div>
        <div className="row" id="fithForecast">
          <div className="col-1">
            <WeatherForecastPreview data={forecast.list[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
