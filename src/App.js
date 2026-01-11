import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by{" "}
        <a href="https://jillian-meehan-portfolio.netlify.app/" target="_blank">
          Jillian Meehan
        </a>{" "}
        and is {""}
        <a
          href="https://weather-app-react-jillian.netlify.app/"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
