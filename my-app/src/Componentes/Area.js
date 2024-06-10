// src/Componentes/Area.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Area.css';

const Area = () => {
  return (
    <div className="area-container">
      <h2>Area</h2>
      <Link to="/seleccion" className="area-link">
        <img src="/images/siembra-icon.png" alt="Siembra" className="area-icon" />
        Siembra
      </Link>
      <Link to="/seleccion" className="area-link">
        <img src="/images/cultivo-icon.png" alt="Cultivo" className="area-icon" />
        Cultivo
      </Link>
      <Link to="/seleccion" className="area-link">
        <img src="/images/cosecha-icon.png" alt="Cosecha" className="area-icon" />
        Cosecha
      </Link>
    </div>
  );
}

export default Area;
