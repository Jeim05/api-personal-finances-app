const express =  require('express');

const response = require('../../red/respuestas')
const controller = require('./controlador')

const router = express.Router();

router.get('/', function(req, res){
    const todos = controller.todos()
    .then((items)=>{
        response.success(req, res, items, 200)   
    })
});

module.exports = router




