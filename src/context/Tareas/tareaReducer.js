import { TAREAS_PROYECTO } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            console.log('ok');
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        default:
            return state;
    }
}