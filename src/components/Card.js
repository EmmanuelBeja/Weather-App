import React from 'react';

const Card = ({setWeather, weather}) => {
  return (
    <span className="weather-card" onMouseDown={() => setWeather([])}>
         <div className="weather-location">
           <span>{weather.name}</span>
           <span>
           <img
             alt={weather.sys.country}
             src={`http://catamphetamine.gitlab.io/country-flag-icons/3x2/${weather.sys.country}.svg`}/>
           </span>
         </div>
         <div className="weather-temperature">
           {Math.round(weather.main.temp)}
           <sup>&deg;C</sup>
         </div>
         <img className="weather-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
         <p className="weather-summary">{weather.weather[0].description}</p>
    </span>
  );
}

export default Card;
