const express = require('express');
const path = require ('path');
const app = express();
const router = require('./routes');


//configuracion
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use (express.static('public'))


//rutas
const index = require('./routes/index');
app.use('/', index);
app.use('/', router);

const productos = require('./routes/products');
app.use('/', productos);
app.use('/', router);

// app.get('/productCart',(request,response)=>{
//     response.sendFile(path.join(__dirname, '/views/components/productCart.ejs'))
// })


//servidor
app.listen (9000, () =>
    console.log ("Servidor funcionando")
    )

