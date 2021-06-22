'use strict'

//express
const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

const personeController = require('./controller/personeController')

//rutas

app.listen(port, () => {
    console.log('escuchando el puerto' + port)
})