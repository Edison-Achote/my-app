// src/Componentes/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Estilos específicos

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de autenticación
    navigate('/menu');
  };

  return (
    <div className="login-container">
      <h2>Florsani</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
