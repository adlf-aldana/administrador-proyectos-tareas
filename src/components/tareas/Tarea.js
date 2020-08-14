import React, { useContext } from 'react';
import TareaContext from '../../context/Tareas/tareaContext';
import proyectoContext from '../../context/proyectoContext';

const Tarea = ({ tarea }) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

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
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={
                        () => {
                            eliminarTarea(tarea.id)
                            obtenerTareas(proyecto[0].id) // o tambien se puede utilizar array destructuring
                        }
                    }
                >Eliminar</button>
            </div>
        </li >
    );
}

export default Tarea;