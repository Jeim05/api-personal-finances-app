const db = require('../../db/mysql')
const TABLA = 'categoria'

function getCategories() {
    return db.getAll(TABLA)
}

module.exports = {
    getCategories,
}