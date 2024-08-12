// src/App.jsx
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Weather from './components/Weather';
import weatherData from './data'; // Import mock data

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const handleSearch = (query) => {
    if (query) {
      setSelectedCountry(query);
    }
  };

  return (
    <div className="app  ">
      <Navbar onSearch={handleSearch} />
      <Weather country={selectedCountry} />
    </div>
  );
};

export default App;
