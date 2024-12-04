const express =  require('express');

const response = require('../../red/respuestas')

const router = express.Router();

router.get('/', function(req, res){
    response.success(req, res, 'Todo OK', 200)
});

module.exports = router




