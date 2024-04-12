import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios
      .get('https://16239b668b2a7ab8.mokky.dev/weather')
      .then((response) => {
        console.log('response', response.data);
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-container__title">MARS InSight Mission</h1>
        <h2 className="app-container__subtitle"> Latest Weather at Elysium Planitia</h2>
        <div className="app-weather">
          <div className="app-weather__grid">
            <div className="app-weather__card">
              {weatherData.map((day) => (
                <div className="app-weather__content" key={day.key}>
                  <div className="app-weather__wrapper">
                    <p className="app-weather__sol">{day.sol} SOL</p>
                    <p className="app-weather__date">{day.date}</p>
                  </div>
                  <p className="app-weather__high">High: {day.maxTemp}°F</p>
                  <p className="app-weather__low">Low: {day.minTemp}°F</p>
                  <p className="app-weather__sunrise">Sunrise: {day.sunrise}</p>
                  <p className="app-weather__sunset">Sunset: {day.sunset}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
