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
module.exports = router;