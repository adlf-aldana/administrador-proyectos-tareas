import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 0, nombre: 'Elegir plataforma', estado: true, proyectoId: 0 },
            { id: 1, nombre: 'Elegir colores', estado: false, proyectoId: 1 },
            { id: 2, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir hosting', estado: true, proyectoId: 3 },
            { id: 4, nombre: 'Elegir plataforma', estado: true, proyectoId: 3 },
            { id: 5, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { id: 6, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir hosting', estado: true, proyectoId: 0 },
        ],
        tareasproyecto: null,
        errortarea: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    // Obteniendo tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar tarea
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // validando form tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // eliminando tarea
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;