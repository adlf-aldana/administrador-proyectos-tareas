import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';

const Proyecto = ({ proyecto }) => {

    // Mandando id a proyecto actual para mostra en tareas como titulo
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => {
                    proyectoActual(proyecto.id)
                    obtenerTareas(proyecto.id)
                }
                }
            >{proyecto.nombre}</button>
        </li >
    );
}

export default Proyecto;