//SQL

const sql = require('mysql');
const util = require('util');

app.use(express.json());

const db_myBook = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_mybook'
}
const conexion = sql.createConnection(db_myBook)

conexion.connect((error) => {
    if (error) throw console.log(error)
    console.log('connected data base')
});

//util conexion
const qy = util.promisify(conexion.query).bind(conexion);

module.exports = qy