import React from 'react';

const FormTareas = () => {
    return (
        <div className="formulario">
            <form action="">
                <div className="content input">
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Tarea" />
                </div>

            </form>
        </div>);
}

export default FormTareas;