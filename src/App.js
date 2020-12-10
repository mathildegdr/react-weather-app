import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="PhoneBorder1">
          <div className="PhoneBackground1"></div>
          <div className="topCurve"></div>
          <div className="bottomLine"></div>
          <div className="container1">
            <h4>HELLO!</h4>
            <br />
            <h1>Weather</h1>
            <h2>Search Engine</h2>
          </div>
        </div>
        <div className="PhoneBorder2">
          <div className="PhoneBackground2"></div>
          <div className="topCurve"></div>
          <div className="bottomLine"></div>
          <div className="container2">
            <h1>Forecast</h1>
            <h2>Next hours</h2>
          </div>
        </div>

        <div className="signature">
          <p>
            Designed and coded by{" "}
            <a
              href="https://github.com/mathildegdr/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Mathilde Gaudier
            </a>
          </p>
        </div>
        <div className="sheCodes">
          <p>SheCodes React project</p>
        </div>
        <Weather defaultCity="Wellington" />
      </div>
    </div>
  );
}
