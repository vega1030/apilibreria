'use stric';


//SQL

const sql = require('mysql');
const util = require('util');


const db_myBook = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_mybook'
}
const conexion = sql.createConnection(db_myBook)

conexion.connect((error) => {
    if (error) throw console.log('error en la base de datos' + error)
    console.log('connected data base')
});

//util conexion
const qy = util.promisify(conexion.query).bind(conexion);

module.exports = qy