import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../types'

const ProyectoState = props => {
    const initialState = {
        proyectos: [
            { id: 0, nombre: 'Tienda Virtual' },
            { id: 1, nombre: 'Intranet' },
            { id: 2, nombre: 'Diseño de Sitio Web' },
            { id: 3, nombre: 'MERN' },
        ],
        formulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = ()=>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}>
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;