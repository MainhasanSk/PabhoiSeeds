import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Seeds from './pages/Seeds';
import WeatherGuide from './pages/WeatherGuide';
import AboutUs from './pages/AboutUs';
import PopupForm from './components/PopupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/weather-guide" element={<WeatherGuide />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <PopupForm />
      </div>
    </Router>
  );
}

export default App;
