import React, {useEffect, useState} from "react";
import "./App.css";


function App() {

  let texto = "";

  const imagenURL = "https://nextsoftware.io/files/images/logos/main/reactjs-logo.png";

  const manejarClick = () => console.log('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    texto = e.currentTarget.value;
  }

  return (
    <>
      <h1 className="rojo">Hola mundo</h1>

      <button 
      onMouseEnter={() => console.log('entrando')}
      onClick={() => console.log('Click desde el boton')}>Clickeame</button>
      <br />
      <input type="text" 
        onKeyUp={(e) => manejarKeyUp(e)}
      />
      <div>
        {texto}
      </div>

      <br />
      
      <img src={imagenURL} alt="logo react" />
      <div>
        <input type="checkbox" checked={true} />Este es un checkbox
      </div>
    </>
  );
}

export default App;
