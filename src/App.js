import CitySearch from "./components/CitySearch/CitySearch";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import "./App.css";
import { useState } from "react";

import { WEATHER_API_URL, WEATHER_API_KEY } from "./API";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const onSearchChangeHandler = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const weatherForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, weatherForecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const weatherForecastResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setWeatherForecast({
          city: searchData.label,
          ...weatherForecastResponse,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <CitySearch onSearchChange={onSearchChangeHandler} />
      {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
      {weatherForecast && (
        <WeatherForecast weatherForecastData={weatherForecast} />
      )}
    </div>
  );
}

export default App;
