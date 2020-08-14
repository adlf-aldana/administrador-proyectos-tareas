import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectoContext';
import TareaContext from '../../context/Tareas/tareaContext';

const FormTareas = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareasContext;

    // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if (!proyecto) return null;

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    // Array Destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmit = e => {
        e.preventDefault();

        // validando formulario
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // agregar la nueva tarea
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false
        agregarTarea(tarea);

        // Actualiza la lista de tareas por proyectoid
        obtenerTareas(proyectoActual.id)

        // reiniciar form
        guardarTarea({
            nombre: ''
        })

    }

    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="content input">
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Tarea" />
                </div>

            </form>

            {errortarea
                ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>
                : null}
        </div>);
}

export default FormTareas;