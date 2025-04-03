import React from 'react';
import '../Login/css/login.css';

const Login = () => {
  return (
    <div className="contenedor-formulario contenedor">
      <div className="imagen-formulario"></div>

      <form className="formulario">
        <div className="texto-formulario">
          <h2>Bienvenido de nuevo</h2>
          <p>Inicia sesión con tu cuenta</p>
        </div>
        <div className="input">
          <label htmlFor="usuario">Usuario</label>
          <input placeholder="Ingresa tu nombre" type="text" id="usuario" />
        </div>
        <div className="input">
          <label htmlFor="contraseña">Contraseña</label>
          <input placeholder="Ingresa tu contraseña" type="password" id="contraseña" />
        </div>
       
        <div className="input">
          <input type="submit" value="Iniciar Sesión" />
        </div>
      </form>
    </div>
  );
};

export default Login;