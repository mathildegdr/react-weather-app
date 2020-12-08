import React from "react";

import "./App.css";
import "./FirstPhone.css";
import Time from "./Time.js";
import SearchEngine from "./SearchEngine.js";

export default function FirstPhone() {
  return (
    <div className="PhoneBorder1">
      <div className="PhoneBackground1"></div>
      <div className="topCurve"></div>
      <div className="bottomLine"></div>
      <div className="container1">
        <div id="hello">
          <h4>HELLO!</h4>
        </div>
        <Time />
        <h1>Weather</h1>
        <h2>Search Engine</h2>
        <SearchEngine />
      </div>
    </div>
  );
}
