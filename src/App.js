// src/App.js
import React from 'react';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import WetWell from './pages/WetWell';
import CoarseScreen from './pages/CoarseScreen';
import MediumScreen from './pages/MediumScreen';
import NavBar from './components/NavBar';
import GritChamber from './pages/GritChamber';


const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wetwell" element={<WetWell />} />
        <Route path="/coarsescreen" element={<CoarseScreen />} />
        <Route path="/mediumscreen" element={<MediumScreen />} />
        <Route path="/gritchamber" element={<GritChamber />} />
      </Routes>
    </HashRouter>
  );
};

export default App;