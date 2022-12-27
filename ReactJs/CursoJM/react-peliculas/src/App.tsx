import React, {useEffect, useState} from "react";
import "./App.css";
import ContenidoDinamico from "./ContenidoDinamico";
import EjemploReloj from "./EjemploReloj";
import FormularioTexto from "./FormularioTexto";
import MostrarTexto from "./MostrarTexto";
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploUseEffect from './EjemploUseEffect';


function App() {

  const [texto, setTexto] = useState('Valor por defecto');

  const [checked, setChecked] = useState(true);

  const imagenURL = "https://nextsoftware.io/files/images/logos/main/reactjs-logo.png";

  const manejarClick = () => console.log('click');

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  }

  const parteIntermedia = <EjemploReloj />

  const estilo = {
    backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
  }

  const parteInferior = <div style={estilo}></div>

  const calificaciones = [
    {nombre: 'Juan', calificacion: 75},
    {nombre: 'Claudia', calificacion: 85},
    {nombre: 'Roberto', calificacion: 95},
  ];

  return (
    <>
      <h1 className="rojo">Hola mundo</h1>

      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked} />mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null}

      {calificaciones.map((cal) => <ContenidoDinamico key={cal.nombre} {...cal} />)}

      {/* <ProyectarContenido>
        <>
          <span>Hola proyectando contenido</span>
          
        </>
      </ProyectarContenido> */}

      <ProyectarContenido2
        parteSuperior = {<span>Este es un mensaje del componente padre</span>}
        parteIntermedia = {parteIntermedia}
        parteInferior = {parteInferior}
      />

      <button 
      onMouseEnter={() => console.log('entrando')}
      onClick={() => console.log('Click desde el boton')}>Clickeame</button>
      <br />
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />
      
      <MostrarTexto texto={texto}/>

      <br />
      
      
      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked} />Este es un checkbox
      </div>
    </>
  );
}

export default App;
