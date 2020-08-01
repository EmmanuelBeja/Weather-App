import React, { useState } from 'react';
import Greetings from './components/Greetings';
import Card from './components/Card';

import { fetchWeather } from './api';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState([]);

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      setLoading(true);
      setLocation('');
      setWeather([]);
      const res = await fetchWeather(location);
      setWeather(res);
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="app-container-overlay" />
      <Greetings />
      <input
        type="text"
        className="search-input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={(e) => handleSearch(e)}
        placeholder={loading ? "Just a sec..." : "Search location..."}
        />
      {weather && weather.main && <Card setWeather={setWeather} weather={weather} />}
    </div>
  );
}

export default App;
