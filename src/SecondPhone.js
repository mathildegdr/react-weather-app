import React from "react";

import "./App.css";
import "./SecondPhone.css";
import Forecast from "./Forecast.js";

export default function SecondPhone() {
  return (
    <div className="PhoneBorder2">
      <div className="PhoneBackground2"></div>
      <div className="topCurve"></div>
      <div className="bottomLine"></div>
      <div className="container2">
        <h1>Forecast</h1>
        <h2>Next hours</h2>
        <Forecast />
      </div>
    </div>
  );
}
