const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../midleware/auth');
const { check } = require('express-validator');

// crear un tarea
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El Proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);
// Obtener las tareas
router.get('/',
    auth,
    tareaController.obtenerTareas
);

// Actualizar tarea
router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

module.exports = router;