import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
// import uuid from 'react-uuid';
import clienteAxios from '../../config/axios';

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA } from '../../types';

const TareaState = props => {
    const initialState = {
        // tareas: [
        //     { id: 0, nombre: 'Elegir plataforma', estado: true, proyectoId: 0 },
        //     { id: 1, nombre: 'Elegir colores', estado: false, proyectoId: 1 },
        //     { id: 2, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2 },
        //     { id: 3, nombre: 'Elegir hosting', estado: true, proyectoId: 3 },
        //     { id: 4, nombre: 'Elegir plataforma', estado: true, proyectoId: 3 },
        //     { id: 5, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
        //     { id: 6, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2 },
        //     { id: 7, nombre: 'Elegir hosting', estado: true, proyectoId: 0 },
        // ],
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    // Obteniendo tareas de un proyecto
    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas/', { params: { proyecto } })
            dispatch({
                type: TAREAS_PROYECTO,
                // payload: proyectoId
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Agregar tarea
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            // tarea.id = uuid();
            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data.tarea
            })

        } catch (error) {
            console.log(error);
        }

    }

    // validando form tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // eliminando tarea
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } });
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Cambia el estado de la tarea
    // const cambiarEstadoTarea = tarea => {
    //     dispatch({
    //         type: ESTADO_TAREA,
    //         payload: tarea
    //     })
    // }

    // extrae una tarea para la edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // actualizar tarea
    const actualizarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tareaExiste
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Limpiar tarea del state
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return (
        <TareaContext.Provider
            value={{
                // tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                // cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;