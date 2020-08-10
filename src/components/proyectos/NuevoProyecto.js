import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    // obteniendo el valor del state
    const { formulario } = proyectosContext;

    // state nuevo proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    // Extraer
    const { nombre } = proyecto;

    // Lee el contenido de input
    const onChange = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            {formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            value={nombre}
                            onChange={onChange}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto" />
                    </form>
                )
                : null
            }
        </Fragment>
    );
}

export default NuevoProyecto;