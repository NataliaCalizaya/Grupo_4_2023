const express = require('express');
const path = require ('path');
const app = express();

app.use (express.static('public'))

app.get('/index',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/login',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/productCart',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/productCart.html'))
})
app.get('/productDetail',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/productDetail.html'))
})
app.get('/register',(request,response)=>{
    response.sendFile(path.join(__dirname, '/views/register.html'))
})



app.listen (9000, () =>
    console.log ("Servidor funcionando")
    )

