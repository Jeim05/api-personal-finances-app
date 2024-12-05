const express = require('express')
const config = require('./config')
const cors = require('cors')

const categories = require('./models/categorias/rutas')

const app = express()

// Configuracion del puerto
app.set('port', config.app.port);

// Configurar Cors
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Rutas
app.use('/api/categorias', categories)


module.exports = app;