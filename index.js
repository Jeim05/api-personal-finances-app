const express = require('express')
const config = require('./config')

const clientes = require('./models/categorias/rutas')

const app = express()


app.set('port', config.app.port);

// Rutas
app.use('/api/categorias', clientes)


module.exports = app;