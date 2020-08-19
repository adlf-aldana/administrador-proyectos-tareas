// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// api/auth
router.post('/',
    [
        check('email', 'Agregar un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 })
    ],
    authController.autentificarUsuario
);

module.exports = router;