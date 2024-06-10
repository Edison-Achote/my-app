// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login';
import Menu from './Componentes/Menu';
import Area from './Componentes/Area';
import Seleccion from './Componentes/Seleccion';
import DatosSiembra from './Componentes/DatosSiembra';
import DatosCultivo from './Componentes/DatosCultivo';
import DatosCosecha from './Componentes/DatosCosecha';
import './App.css';  // Para estilos globales

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/area" element={<Area />} />
        <Route path="/seleccion" element={<Seleccion />} />
        <Route path="/datos-siembra" element={<DatosSiembra />} />
        <Route path="/datos-cultivo" element={<DatosCultivo />} />
        <Route path="/datos-cosecha" element={<DatosCosecha />} />
      </Routes>
    </Router>
  );
}

export default App;
