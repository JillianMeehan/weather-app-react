export default function App() {
  return (
    <div className="weather-app">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-form-input"
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>

      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">
              Paris
            </h1>
            <p className="weather-app-details">
              <span id="time">10:00 AM</span>,{" "}
              <span id="description">Sunny</span>
              <br />
              Humidity: <strong id="humidity">50%</strong>, Wind:{" "}
              <strong id="wind-speed">10 km/h</strong>
            </p>
          </div>

          <div className="weather-app-temperature-container">
            <div id="icon" className="weather-app-icon">
              ☀️
            </div>
            <div className="weather-app-temperature-value" id="temperature">
              20
            </div>
            <div className="weather-app-unit">°F</div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="weather-forecast" id="forecast">
          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Mon</div>
            <div className="weather-forecast-icon">🌤️</div>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">20°</span>
              <span className="weather-forecast-temperature">15°</span>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Tue</div>
            <div className="weather-forecast-icon">☁️</div>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">22°</span>
              <span className="weather-forecast-temperature">16°</span>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Wed</div>
            <div className="weather-forecast-icon">🌦️</div>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">18°</span>
              <span className="weather-forecast-temperature">14°</span>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Thu</div>
            <div className="weather-forecast-icon">🌧️</div>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">16°</span>
              <span className="weather-forecast-temperature">12°</span>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Fri</div>
            <div className="weather-forecast-icon">☀️</div>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">21°</span>
              <span className="weather-forecast-temperature">17°</span>
            </div>
          </div>
        </div>
      </main>

      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/jilbobaggins/"
          target="_blank"
          rel="noreferrer"
        >
          Jillian Meehan
        </a>
        , is{" "}
        <a
          href="https://github.com/jilbobaggins/weatherapp"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://app.netlify.com/sites/jillians-weather-app/overview"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
