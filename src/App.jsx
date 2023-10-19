import { useState } from 'react';
import './App.css'
// LESSON 1
import SyntaxCompare from './lesson-1/old-syntax-vs-new-syntax';
// LESSON 2
import { createContext, useContext } from 'react'
import ListaTareas from './lesson-2/lista-tareas';
import Cabecera from './lesson-2/Cabecera';
import FormularioSignup from './lesson-3/formulario-sing-up';

const temas = {
  claro: {
    "texto": "#3c3b3d",
    "fondo": "#eff1f5",
    "fondo2": "#ccd0da"
  },
  oscuro: {
    "texto": "#cdd6f4",
    "fondo": "#1e1e2e",
    "fondo2": "#313244"
  }
}

const ContextoTema = createContext(temas.claro);

function App() {
  const [tema, setTema] = useState("claro");

  const tareas = [
    {
      titulo: "Aprender componentes de React",
      completada: false
    },
    {
      titulo: "Completar las prácticas del módulo 1",
      completada: true
    },
    {
      titulo: "Realizar la autoevaluación",
      completada: false
    }
  ]

  return (
    <ContextoTema.Provider value={temas[tema]}>
      <div className='App'>
        {/* LESSON 1 */}
        {/* <SyntaxCompare /> */}

        {/* LESSON 2 */}
        {/* Cabecera, Lista Tareas, Formulario Nueva */}
        {/* <Cabecera tareas={tareas} />
        <ListaTareas tareas={tareas} />
        {
          tema === "claro"
            ? <button onClick={() => setTema("oscuro")}>Modo Oscuro</button>
            : <button onClick={() => setTema("claro")}>Modo Claro</button>
        } */}

        {/* LESSON 3 */}
        <FormularioSignup />
      </div>
    </ContextoTema.Provider>
  );
}

export default App
