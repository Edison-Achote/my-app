// src/Componentes/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';  // Estilos específicos

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <Link to="/area">Area</Link>
      <Link to="/seleccion">Seleccion</Link>
      <Link to="/datos-siembra">Datos Siembra</Link>
      <Link to="/datos-cultivo">Datos Cultivo</Link>
      <Link to="/datos-cosecha">Datos Cosecha</Link>
    </div>
  );
}

export default Menu;
