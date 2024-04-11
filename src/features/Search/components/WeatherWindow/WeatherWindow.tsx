import { WeatherData } from "../../../../core/models/weather-data.model";

import { format, getDay } from "date-fns";

import "./WeatherWindow.scss";

interface WeatherWindowProps {
  data: WeatherData;
}

const WeatherWindow = (props: WeatherWindowProps) => {
  const weather = props.data;

  const weatherIcon = (type: string) => {
    if (type === "sunny") {
      return <div className="weather-icon sunny-icon"></div>;
    } else if (type === "cloudy") {
      return <div className="weather-icon  cloudy-icon"></div>;
    } else if (type === "rain") {
      return <div className="weather-icon  rainy-icon"></div>;
    } else if (type === "snowy") {
      return <div className="weather-icon  snowy-icon"></div>;
    }
  };

  return (
    <div className="weather-window">
      <div className="weather-window-content">
        <div className="weather-warp">
          <div className="weather-title">
            <div className="weather-info">
              <h5>{weather.city}</h5>
              <h5>{weather.country}</h5>
              <h5 className="mt-4">
                {format(new Date(weather.date), "yyyy-MM-dd")} |{" "}
                {format(new Date(weather.date), "EEE")}
              </h5>
            </div>
            <div className="weather-detail">
              <span>最高{weather.highTemp}°C</span>
              <span>最低{weather.lowTemp}°C</span>
              <span>{weather.rainfall}%</span>
            </div>
          </div>

          <div className="today-weather-warp">
            <div className="today-weather">{weatherIcon(weather.type)}</div>
            <div className="today-temperature">{weather.temperature}°C</div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="future-weather">
        {weather.weathers.map(({ date, type, temperature }) => (
          <div className="future-weather-item" key={date}>
            <span>{format(new Date(date), "EEE")}</span>
            <div className="weather-item-pic">{weatherIcon(type)}</div>
            <span>{temperature}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWindow;
