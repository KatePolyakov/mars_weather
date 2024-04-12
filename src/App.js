import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);


  useEffect(() => {
    axios
      .get(
        'https://16239b668b2a7ab8.mokky.dev/weather',
      )
      .then((response) => {
        console.log("response", response.data);
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div>Mars Weather</div>

      {weatherData.map((day) => (
        <div key={day.key}>
          <p>{day.date}</p>
          <p>{day.sol}</p>
          <p>{day.maxTemp} </p>
          <p>{day.minTemp}</p>
          <p>{day.pressure}</p>
          <p>{day.sunrise}</p>
          <p>{day.sunset}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
