import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://jillian-meehan-portfolio.netlify.app/">
            Jillian Meehan
          </a>{" "}
          and is {""}
          <a href="https://weather-app-react-jillian.netlify.app/ ">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
