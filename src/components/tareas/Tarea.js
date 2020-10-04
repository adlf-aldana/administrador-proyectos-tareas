import React, { useContext } from 'react';
import TareaContext from '../../context/Tareas/tareaContext';
import proyectoContext from '../../context/proyectoContext';

const Tarea = ({ tarea }) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareasContext;

    const estadoTarea = tarea => {
        if (tarea.estado)
            tarea.estado = false
        else
            tarea.estado = true
        actualizarTarea(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => estadoTarea(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => estadoTarea(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => guardarTareaActual(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={
                        () => {
                            eliminarTarea(tarea._id, proyecto[0]._id)
                            obtenerTareas(proyecto[0]._id) // o tambien se puede utilizar array destructuring
                        }
                    }
                >Eliminar</button>
            </div>
        </li >
    );
}

export default Tarea;