import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SimuladoNovo from './pages/Simulado/Simulado';
import Home from './pages/Home/Home';
import Questoes from './pages/Questoes/Questoes';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulado" element={<SimuladoNovo />} />
        <Route path="/questoes" element={<Questoes />} />
      </Routes>
    </div>
  );
}

export default App;