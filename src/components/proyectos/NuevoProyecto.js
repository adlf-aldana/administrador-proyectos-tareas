import React, { Fragment } from 'react';

const NuevoProyecto = () => {
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto" />
            </form>
        </Fragment>
    );
}

export default NuevoProyecto;