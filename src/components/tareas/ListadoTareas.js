import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectoContext';

const ListadoTareas = () => {

    // Extraer proyecto del state
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array Destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto

    const tareasProyecto = [
        { id: 0, nombre: 'Elegir plataforma', estado: true },
        { id: 1, nombre: 'Elegir colores', estado: false },
        { id: 2, nombre: 'Elegir plataformas de pago', estado: false },
        { id: 3, nombre: 'Elegir hosting', estado: true },
    ]
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"> <p>No hay tareas</p> </li>)
                    : (tareasProyecto.map(tarea => (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea} />
                    )))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;