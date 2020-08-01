import axios from 'axios';
import { toast } from 'react-toastify';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const fetchWeather = location => axios.get(URL, {
    params: {
      q: location,
      units: 'metric',
      APPID: API_KEY,
    }
  }).then(res => res.data)
    .catch(err => toast.error(`Ooops! Could'nt find place called ${location} 😓.`));
