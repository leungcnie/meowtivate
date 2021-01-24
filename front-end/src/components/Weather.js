import React from "react";
import { useState, useEffect, className } from "react";
import "./styles/weather.css";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

// api.openweathermap.org/data/2.5/
// weather?lat={lat}&lon={lon}&appid={API key}

export const Weather = () => {
  // const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  // const search = (event) => {
  //   if (event.key === "Enter") {
  //     fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result);
  //         console.log(result);
  //       });
  //   }
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`${api.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
    });
  }, [])
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.weather[0].main.includes("Cloud")
            ? "weather Clouds"
            : "weather"
          : "weather"
      }
    >
      <section className="weather">
        {/* <div className="weather-search-box">
          <input
            type="text"
            className="city-search-bar"
            placeholder="City..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div> */}
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            <div className="temp">{Math.round(weather.main.temp)}&deg;c</div>
            <div className="weather">{weather.weather[0].main}</div>
            <div><img 
            className={weather.weather[0].main} 
            style={{display: 'block'}} 
            src={`https://meowtivate.s3-us-west-2.amazonaws.com/weather/${weather.weather[0].main}.png`} 
            alt="weather-image"/>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};
