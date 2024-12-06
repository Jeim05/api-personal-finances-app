const express = require('express');

const response = require('../../red/respuestas')
const controller = require('./controlador')

const router = express.Router();

router.get('/', getCategories)
router.get('/:id', getById) 
router.put('/', deleteCategorie)

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

async function deleteCategorie(req, res) {
    try {
        const items = await controller.deleteCategorie(req.body)
        response.success(req, res, 'Item eliminado satisfactoriamente', 200)
    } catch (error) {
        response.error(req, res, error, 500)
    }
};

module.exports = router




