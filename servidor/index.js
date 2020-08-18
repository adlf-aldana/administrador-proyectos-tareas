// importando express
const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();

// conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extends: true }));

// crear puerto
const PORT = process.env.PORT || 4000;

// Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})