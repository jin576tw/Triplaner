import { WeatherData } from "../../../../core/models/weather-data.model";

interface WeatherWindowProps {
  data: WeatherData;
}

const WeatherWindow = (props: WeatherWindowProps) => {
  const weather = props.data;

  return (
    <div className="weather-window">
      <div className="weather-window-content">
        <div className="weather-warp">
          <div className="weather-title">
            <h5>{weather.city}</h5>
            <h5>{weather.country}</h5>
            <h5>{weather.date}</h5>
          </div>
          <div className="weather-info">
            <span>{weather.highTemp}</span>
            <span>{weather.lowTemp}</span>
            <span>{weather.rainfall}</span>
          </div>
        </div>
        <div className="today-weather-warp">
          <div className="today-weather">{weather.type}</div>
          <div className="today-temperature">{weather.temperature}</div>
        </div>
      </div>
      <hr></hr>
      <div className="future-weather">
        {weather.weathers.map(({ date, type, temperature }) => (
          <div className="future-weather-item" key={date}>
            <span>{type}</span>
            <span>{date}</span>
            <span>{temperature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWindow;
