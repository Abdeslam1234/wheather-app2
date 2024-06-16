import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    description: "Clear",
    icon: "01d",
  });
  const [name, setName] = useState("");

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=60de2b62628be01338e40f0efd26a1b8`;
      axios
        .get(apiUrl)
        .then((res) => {
          const tempInCelsius = res.data.main.temp - 273.15;
          const weatherIcon = res.data.weather[0].icon;
          setData({
            celcius: tempInCelsius.toFixed(),
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,

            icon: weatherIcon,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick}>
            <img src="/icons/loupe.png" alt="Search" />
          </button>
        </div>
        <div className="info">
          <img src={getWeatherIconUrl(data.icon)} alt="Weather Icon" />
          <h1>{data.celcius}°C</h1>
          <h2>{data.name}</h2>

          <div className="details">
            <div className="col">
              <img src="icons/humidity.png" alt="Humidity Icon" />
              <div className="humidity">
                <p>{data.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="icons/wind.png" alt="Wind Icon" />
              <div className="wind">
                <p>{data.speed} km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
