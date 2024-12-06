const express = require('express');

const response = require('../../red/respuestas')
const controller = require('./controlador')

const router = express.Router();

router.get('/', getCategories)
router.get('/:id', getById) 

async function getCategories (req, res) {
    try {
        const items = await controller.getCategories()
        response.success(req, res, items, 200)
    } catch (error) {
        response.error(req, res, error, 500)
    }
};

 async function getById(req, res) {
    try {
        const items = await controller.getById(req.params.id)
        response.success(req, res, items, 200)
    } catch (error) {
        response.error(req, res, error, 500)
    }

};

module.exports = router




