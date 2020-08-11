import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectoContext';

const FormTareas = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) return null;

    // Array Destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

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