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
        <h2 className="app-container__subtitle"> Latest Weather at Gale Crater by Curiosity Rover</h2>
        <div className="app-weather">
          <div className="app-weather__grid">
                {weatherData.map((day) => (
                  <div key={day.id} className="app-weather__card">
                    <div className="app-weather__wrapper">
                      <p className="app-weather__sol">{day.sol} SOL</p>
                      <p className="app-weather__date">{day.date}</p>
                    
                      <p className="app-weather__high">High: {day.maxTemp}°F</p>
                      <p className="app-weather__low">Low: {day.minTemp}°F</p>
                      <p className="app-weather__sunrise">Sunrise: {day.sunrise}</p>
                      <p className="app-weather__sunset">Sunset: {day.sunset}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <span className='credits'>Photo by <a className='credits__link'href="https://unsplash.com/@daniele71043?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniele Colucci</a> on <a className='credits__link1' href="https://unsplash.com/photos/brown-sand-under-blue-sky-during-night-time-OtXJhYjbKeg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </span>
      </div>
    </div>
  );
}

export default App;
