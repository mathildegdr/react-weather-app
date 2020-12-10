import React from "react";
import "./App.css";

import ClearDay from "./images/ClearDay.svg";
import ClearNight from "./images/ClearNight.svg";
import CloudyDay from "./images/CloudyDay.svg";
import CloudyNight from "./images/CloudyNight.svg";
import FoggyDay from "./images/FoggyDay.svg";
import FoggyNight from "./images/FoggyNight.svg";
import MoonRainNight from "./images/MoonRainNight.svg";
import SunRainDay from "./images/SunRainDay.svg";
import PartlyCloudyDay from "./images/PartlyCloudyDay.svg";
import PartlyCloudyNight from "./images/PartlyCloudyNight.svg";
import RainyDay from "./images/RainyDay.svg";
import RainyNight from "./images/RainyNight.svg";
import SnowyDay from "./images/SnowyDay.svg";
import SnowyNight from "./images/SnowyNight.svg";
import ThunderDay from "./images/ThunderDay.svg";
import ThunderNight from "./images/ThunderNight.svg";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": ClearDay,
    "01n": ClearNight,
    "02d": PartlyCloudyDay,
    "02n": PartlyCloudyNight,
    "03d": PartlyCloudyDay,
    "03n": PartlyCloudyNight,
    "04d": CloudyDay,
    "04n": CloudyNight,
    "09d": RainyDay,
    "09n": RainyNight,
    "10d": SunRainDay,
    "10n": MoonRainNight,
    "11d": ThunderDay,
    "11n": ThunderNight,
    "13d": SnowyDay,
    "13n": SnowyNight,
    "50d": FoggyDay,
    "50n": FoggyNight,
  };

  return <img src={codeMapping[code]} alt={alt} className="weatherIcon" />;
}
