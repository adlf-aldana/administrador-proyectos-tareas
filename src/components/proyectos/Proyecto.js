import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectoContext';

const Proyecto = ({ proyecto }) => {

    // Mandando id a proyecto actual para mostra en tareas como titulo
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;