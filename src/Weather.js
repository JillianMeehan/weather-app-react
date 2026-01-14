import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature,
      coordinates: `${response.data.coordinates.latitude} ° ${response.data.coordinates.longitude} °`,
      wind: response.data.wind,
      time: response.data.time,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus={true}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li className="text-capitalize">{weatherData.description}</li>
          <li>{weatherData.coordinates}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="weather-temperature">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="weather-icon"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature.current)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Feels Like: {Math.round(weatherData.temperature.feels_like)}°C
              </li>
              <li>Humidity: {weatherData.temperature.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind.speed)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ebb62d4eb32fab012a3231648ffctod0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
