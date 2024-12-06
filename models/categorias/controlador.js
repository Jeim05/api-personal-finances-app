const db = require('../../db/mysql')
const TABLA = 'categoria'

function getCategories() {
    return db.getAll(TABLA)
}

function getById(id){
    return db.getById(TABLA, id)
}

module.exports = {
    getCategories,
    getById,
}