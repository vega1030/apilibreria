'use strict'

const personeController = require('./controller/personeController')
//express
const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.json());



//rutas

app.listen(port, () => {
    console.log('escuchando el puerto ' + port)
})