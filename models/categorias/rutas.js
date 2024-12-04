const express =  require('express');

const response = require('../../red/respuestas')
const controller = require('./controlador')

const router = express.Router();

router.get('/', function(req, res){
    const todos = controller.todos()
    response.success(req, res, todos, 200)
});

module.exports = router




