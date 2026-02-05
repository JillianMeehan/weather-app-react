import React from "react";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>
          Last updated:{" "}
          {new Date(props.data.time * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            />
            <WeatherTemperature celcius={props.data.temperature.current} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels Like: {Math.round(props.data.temperature.feels_like)}°C
            </li>
            <li>Humidity: {props.data.temperature.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind.speed)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
