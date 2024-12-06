const response = require('./respuestas');

function error(err, req, res, next){
    console.log('[error', err)

    const message = err.message || 'Error Interno'
    const status = err.statusCode || 500;

    respuesta.error(req, res, message, status)
}

module.exports = error