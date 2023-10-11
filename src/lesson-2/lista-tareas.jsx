const Tarea = ({ titulo, completada }) => {
    return (
        <li className={completada ? "done" : "todo"}>
            <label><input type="checkbox" defaultChecked={completada} />{completada ? "DONE" : "TODO"}</label>
            {titulo}
            <button>Editar</button>
        </li>
    )
}

const ListaTareas = ({ tareas }) => {
    if (tareas.length == 0) {
        return null;
    }

    return (
        <ul>
            <Tarea {...tareas[0]} />
        </ul>
    )
}

export default ListaTareas;