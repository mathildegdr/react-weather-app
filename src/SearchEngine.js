import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5b6bb404df31807228a79abe5a0ba742";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input id="submit" type="submit" value="🔍" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <h3> {city} </h3>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description} </li>
          <li>Humidity: {weather.humidity}</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
        <img src={weather.icon} alt={weather.description} />
      </div>
    );
  } else {
    return form;
  }
}
