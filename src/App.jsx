import { createElement } from 'react'
import './App.css'

// ### Ejemplo con   --> se visualiza como código JSX transpilado por BABEL ###

const FormularioBusqueda = () => {
  return createElement(
    "form",
    { action: "/search", emthod: "GET" },
    createElement(
      "input",
      { type: "search", placeholder: "Términos de búsqueda" }
    ),
    createElement("button", { type: "submit" }, "Buscar")
  );
}

const Cabecera = () => {
  return createElement(
    "div",
    null,
    createElement("h1", null, "Mi primera app React"),
    createElement(FormularioBusqueda)
  );
}

const Desplegable = (props) => {
  return createElement(
    "details",
    null,
    createElement("summary", null, props.titulo),
    createElement("p", null, props.contenido)
  );
}

function App() {
  return createElement(
    "div",
    { className: "App" },
    createElement(Cabecera),
    createElement(Desplegable, { 
      titulo: "Título 1", 
      contenido: "Contenido 1" 
    }),
    createElement(Desplegable, {
      titulo: "Título 2",
      contenido: "Contenido 2"
    })
  );
}

// ### Ejemplo con sintaxis JSX ###
/*
const FormularioBusqueda = () => {
  return <form action='search' method='GET'>
    <input type="search" placeholder="Términos de búsqueda" />
    <button type="submit">Buscar</button>
  </form>
}

const Cabecera = () => {
  return <div>
    <h1>Mi primera app React</h1>
    <FormularioBusqueda />
  </div>
}

const Desplegable = (props) => {
  return <details>
    <summary>{props.titulo}</summary>
    <p>{props.contenido}</p>
  </details>
}

function App() {
  return <div className='App'>
    <Cabecera />
    <Desplegable titulo="Título 1" contenido="Contenido 1" />
    <Desplegable titulo="Título 2" contenido="Contenido 2" />
  </div>
}
*/

export default App
