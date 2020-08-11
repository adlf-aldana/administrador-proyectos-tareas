import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import uuid from 'react-uuid';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    MOSTRAR_ERROR,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../types';

const ProyectoState = props => {
    const proyectos = [
        { id: 0, nombre: 'Tienda Virtual' },
        { id: 1, nombre: 'Intranet' },
        { id: 2, nombre: 'Diseño de Sitio Web' },
        { id: 3, nombre: 'MERN' },
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();
        console.log(proyecto);
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Mostrando error
    const mostrarError = () => {
        dispatch({
            type: MOSTRAR_ERROR
        })
    }

    // Proyecto Seleccionado
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Eliminar un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}>
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;