import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { id: 0, nombre: 'Elegir plataforma', estado: true },
        { id: 1, nombre: 'Elegir colores', estado: false },
        { id: 2, nombre: 'Elegir plataformas de pago', estado: false },
        { id: 3, nombre: 'Elegir hosting', estado: true },
    ]
    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
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
        </Fragment>
    );
}

export default ListadoTareas;