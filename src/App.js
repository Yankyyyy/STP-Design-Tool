// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import WetWell from './pages/WetWell';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wetwell" element={<WetWell />} />
      </Routes>
    </Router>
  );
};

export default App;