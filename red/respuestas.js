exports.success = function(req, res, mensaje = '', status = 200){
    res.status(statusCode).send({
        error: false,
        status: status,
        body: mensaje
    })
}

exports.error = function(req, res, mensaje = '', status = 500){
    res.status(statusCode).send({
        error: true,
        status: status,
        body: mensaje
    })
}