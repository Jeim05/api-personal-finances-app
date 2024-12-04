const db = require('../../db/mysql')
const TABLA = 'categoria'

function todos() {
    return db.todos(TABLA)
}

module.exports = {
    todos,
}