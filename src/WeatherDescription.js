import React from "react";
import "./Weather.css";

export default function Description({ code, alt }) {
  const codeMapping = {
    "01d": "Clear Day",
    "01n": "Clear Night",
    "02d": "Partly Cloudy",
    "02n": "Partly Cloudy",
    "03d": "Partly Cloudy",
    "03n": "Partly Cloudy",
    "04d": "Cloudy",
    "04n": "Cloudy",
    "09d": "Rainy",
    "09n": "Rainy",
    "10d": "Rainy",
    "10n": "Rainy",
    "11d": "Thunder",
    "11n": "Thunder",
    "13d": "Snowy",
    "13n": "Snowy",
    "50d": "Fog",
    "50n": "Fog",
  };

  return (
    <h5>
      {" "}
      src={codeMapping[code]} alt={alt}{" "}
    </h5>
  );
}
