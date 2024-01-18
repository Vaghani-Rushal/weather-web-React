import "./CurrentWeather.css";

const CurrentWeather = ({ currentWeatherData }) => {
  let weatherIcon = require(`../../assets/icons/${currentWeatherData.weather[0].icon}.png`);

  return (
    <div className="current-weather-card">
      <div className="card-top-part">
        <div>
          <p className="city">{currentWeatherData.city}</p>
          <p className="weather-description">
            {currentWeatherData.weather[0].description}
          </p>
        </div>
        <img className="weather-icon" src={weatherIcon} alt="Weather" />
      </div>
      <div className="card-bottom-part">
        <p className="temperature">
          {Math.round(currentWeatherData.main.temp)}°C
        </p>
        <div className="weather-detailed">
          <div className="parameter-row">
            <span className="parameter-label parameter-label__heading">
              Details
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(currentWeatherData.main.feels_like)} °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {currentWeatherData.main.humidity} %
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {currentWeatherData.main.pressure} mbar
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(currentWeatherData.wind.speed)} m/s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
