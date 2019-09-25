// Requires (importación de librerías)
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexión a la BBDD mongo
/* mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response)=>{
    if (error) throw error;
    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
}); */
mongoose.connect('mongodb://localhost:27017/hospitalDB', {useNewUrlParser: true}, (error, response)=>{
    if (error) throw error;
    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
});

//Escuchar peticiones del servidor 'express'
/* app.listen(3000, function () {
  console.log('App listening para el puerto 3000 !!!');
}); */
app.listen(3000, () => {
    console.log('App listening para el puerto 3000: \x1b[32m%s\x1b[0m','online');
});

// Rutas
app.get('/', (request, response, next) => {
    response.status(200); //ok
    response.send('Respuesta del servidor express correcta');
});

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.get('/json', (request, response, next) => {
    response.status(200).json({
        ok:true,
        status: 200,
        mensaje:'Peticioń realizada corréctamente'
    });
});

app.get('/error', (request, response, next) => {
    response.status(403).json({
        ok:false,
        status: 403,
        mensaje:'Error en la Peticioń'
    });
});

