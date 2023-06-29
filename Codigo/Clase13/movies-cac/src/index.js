// index.js: Este archivo es el punto de entrada de tu aplicación React. Es el archivo principal que se carga primero y desde donde se inicia la renderización de tu aplicación.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* renderiza App.jsx */}
  </React.StrictMode>
);
