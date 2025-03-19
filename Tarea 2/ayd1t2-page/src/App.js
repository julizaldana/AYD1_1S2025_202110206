import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showLabel, setShowLabel] = useState(false);

  const handleClick = () => {
    setShowLabel(!showLabel);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Botón con estilo de Bootstrap */}
        <label>Tarea 2</label>
        <button type="button" className="btn btn-light" onClick={handleClick}>
          {showLabel ? 'Ocultar Datos' : 'Mostrar Datos'}
        </button>

        {/* Label con saltos de línea */}
        {showLabel && (
          <label>
            Nombre: Julio Alejandro Zaldaña Ríos <br />
            Carnet: 202110206 <br />
            Laboratorio Análisis y Diseño de Sistemas 1 <br />
            Sección A
          </label>
        )}
      </header>
    </div>
  );
}

export default App;