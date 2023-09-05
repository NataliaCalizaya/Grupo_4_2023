const express = require('express');
const path = require ('path');
const app = express();

const router = require('./routes');
const productRouter = require('../routes/productCart');

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use (express.static('public'))

app.use('/', index);
app.use('/', router);


// app.get('/productCart',(request,response)=>{
//     response.sendFile(path.join(__dirname, '/views/components/productCart.ejs'))
// })

app.use('/productCart', productRouter);
app.use('/', router);


app.get('/productDetail',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/productDetail.html'))
})
app.get('/register',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/register.html'))
})



app.listen (9000, () =>
    console.log ("Servidor funcionando")
    )

