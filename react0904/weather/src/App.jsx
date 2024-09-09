import { useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import BtnCon from './components/BtnCon';
import Button from './components/Button';

const getWeather = async (lat, lon) => {
  let url = `h`;
  const res = await fetch(url);
  console.log(res);
};

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log(position.coords.latitude);
    getWeather(latitude, longitude);
  });
};

function App() {
  return (
    <main className='main'>
      <h1>날씨 api 활용</h1>
      <WeatherBox />
      <BtnCon />
    </main>
  );
}

export default App;
