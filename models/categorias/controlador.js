const db = require('../../db/mysql')
const TABLA = 'categoria'

function getCategories() {
    return db.getAll(TABLA)
}

function getById(id){
    return db.getById(TABLA, id)
}

function addCategorie(){
    return db.addCategorie(TABLA)
}

function deleteCategorie(body){
    return db.deleteCategorie(TABLA, body)
}

module.exports = {
    getCategories,
    getById,
    deleteCategorie,
    addCategorie
}