const mysql = require('mysql')
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function connMysql(){
    connection = mysql.createConnection(dbconfig)
    connection.connect((err)=>{
        if (err) {
            console.log('[db err]', err);
            setTimeout(connMysql, 200) 
        }else{
            console.log('BD Conectada');  
        }
    })

    connection.on('error',err =>{
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connMysql
        }else{
            throw err;
        }
    })
}

connMysql();

function getAll(table){
    return new Promise((resolve, reject) =>{
        connection.query(`SELECT * FROM ${table}`, (error, result) =>{
            if (error) {
                return reject(error)
            }else resolve(result)
        })
    })
}

function getById(table, id){

}

function add(table, data){

}

function remove(table, id){

}

module.exports = {
    getAll,
    getById, 
    add,
    remove
}