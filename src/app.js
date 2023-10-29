const express = require('express');
const path = require ('path');
const app = express();

//configuracion
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use (express.static('public'))

//rutas
const index = require('./routes/index');
app.use('/', index);

const productos = require('./routes/products/:');
app.use('/productos', productos);

const usuarios = require('./routes/users');
app.use('/', usuarios);

//servidor
app.listen (9000, () =>
    console.log ("Servidor funcionando")
    )

