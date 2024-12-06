const express = require('express')
const config = require('./config')
const cors = require('cors')
const morgan = require('morgan')

const categories = require('./models/categorias/rutas')
const error = require('./red/errors')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

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
app.use(error)


module.exports = app;