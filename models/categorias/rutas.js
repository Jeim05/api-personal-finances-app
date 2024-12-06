const express = require('express');

const response = require('../../red/respuestas')
const controller = require('./controlador')

const router = express.Router();

router.get('/', async function (req, res) {
    const items = await controller.getCategories()
    response.success(req, res, items, 200)
});

module.exports = router




