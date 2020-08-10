import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    const proyectos = [
        { id: 0, nombre: 'Tienda Virtual' },
        { id: 1, nombre: 'Intranet' },
        { id: 2, nombre: 'Diseño de Sitio Web' },
    ]
    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;