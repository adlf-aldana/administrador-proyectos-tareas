import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 0, nombre: 'Elegir plataforma', estado: true, proyectoId: 0 },
            { id: 1, nombre: 'Elegir colores', estado: false, proyectoId: 1 },
            { id: 2, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir hosting', estado: true, proyectoId: 3 },
            { id: 0, nombre: 'Elegir plataforma', estado: true, proyectoId: 3 },
            { id: 1, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { id: 2, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir hosting', estado: true, proyectoId: 0 },
        ],
        tareasproyecto: null
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
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas
            }}>
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;