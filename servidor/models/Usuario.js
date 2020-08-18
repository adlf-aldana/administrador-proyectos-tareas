const mongoose = require('nomgoose');

const UsuariosSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.module('Usuario', UsuariosSchema);