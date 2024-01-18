import "./WeatherForecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const WeatherForecast = ({ weatherForecastData }) => {
  const dayOfWeek = new Date().getDay();

  const weekdaysForForecast = WEEK_DAYS.slice(
    dayOfWeek,
    WEEK_DAYS.length
  ).concat(WEEK_DAYS.slice(0, dayOfWeek));

  return (
    <>
      <label className="title">Daily for next 7 days</label>
      <Accordion allowZeroExpanded>
        {weatherForecastData.list.splice(0, 7).map((dailyForecast, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-forecast">
                  <img
                    className="icon-small"
                    src={`icons/${dailyForecast.weather[0].icon}.png`}
                    alt="daily-weather"
                  />
                  <label className="day-of-week">
                    {weekdaysForForecast[index]}
                  </label>
                  <label className="weather-desc">
                    {dailyForecast.weather[0].description}
                  </label>
                  <label className="forecast-temperature value">
                    {Math.round(dailyForecast.main.temp)}°C
                  </label>
                  <label className="feels-like-temperature">
                    Feels like{" "}
                    <span className="value">
                      {Math.round(dailyForecast.main.feels_like)}°C
                    </span>
                  </label>
                  <label className="humidity">
                    Humidity:{" "}
                    <span className="value">
                      {dailyForecast.main.humidity} %
                    </span>
                  </label>
                  <label className="pressure">
                    Pressure:{" "}
                    <span className="value">
                      {dailyForecast.main.pressure} mbar
                    </span>
                  </label>
                  <label className="wind-speed">
                    Wind:{" "}
                    <span className="value">
                      {Math.round(dailyForecast.wind.speed)} m/s
                    </span>
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div className="daily-details-item">
                  <label>Feels like</label>
                  <label>
                    <span className="value">
                      {Math.round(dailyForecast.main.feels_like)}°C
                    </span>
                  </label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>
                    <span className="value">
                      {dailyForecast.main.humidity} %
                    </span>
                  </label>
                </div>
                <div className="daily-details-item">
                  <label>Pressure</label>
                  <label>
                    <span className="value">
                      {dailyForecast.main.pressure} mbar
                    </span>
                  </label>
                </div>
                <div className="daily-details-item">
                  <label>Wind</label>
                  <label>
                    <span className="value">
                      {Math.round(dailyForecast.wind.speed)} m/s
                    </span>
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default WeatherForecast;
