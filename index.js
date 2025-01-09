// Instalar Express
//const express = require('express'); // Sintaxis que se conoce como commonJS
import express from 'express'; // Misma sintaxis que la linea anterior pero mas moderno
import router from './routes/index.js';
import db from './config/db.js';

//console.log(process.env.DATABASE);

// Arranca el servidor
const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error) )

// Definir puerto
const port = process.env.PORT || 3000;

// Habiliar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    //console.log(res);
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

// Agregar body parte para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));


// Definir la carpeta publica
app.use(express.static('public'));

// Agregar routes
app.use('/', router);


app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
});