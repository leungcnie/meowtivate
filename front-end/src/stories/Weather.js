import React from "react";
import { useState } from "react";
import "./weather.css";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

// api.openweathermap.org/data/2.5/
// weather?lat={lat}&lon={lon}&appid={API key}

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.weather[0].main.includes("Cloud")
            ? "weather cloudy"
            : "weather"
          : "weather"
      }
    >
      <section className="weather">
        <div className="weather-search-box">
          <input
            type="text"
            className="city-search-bar"
            placeholder="City..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            <div className="temp">{Math.round(weather.main.temp)}&deg;c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};
