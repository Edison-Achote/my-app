// src/Componentes/DatosSiembra.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './DatosSiembra.css';  // Estilos específicos

const DatosSiembra = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data Siembra',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div className="datos-siembra-container">
      <h2>Datos Siembra</h2>
      <Bar data={data} />
    </div>
  );
}

export default DatosSiembra;
