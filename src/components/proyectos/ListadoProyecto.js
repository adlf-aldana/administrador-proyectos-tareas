import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {

    // Obteniendo proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, [])

    // Revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        classNames="proyecto"
                        timeout={200}
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;