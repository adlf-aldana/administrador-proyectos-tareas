// importando express
const express = require('express');

// crear el servidor
const app = express();

// crear puerto
const PORT = process.env.PORT || 4000;

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})