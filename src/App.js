import React from "react";

import "./App.css";

import FirstPhone from "./FirstPhone.js";
import SecondPhone from "./SecondPhone.js";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <FirstPhone />
        <SecondPhone />
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
      </div>
    </div>
  );
}
