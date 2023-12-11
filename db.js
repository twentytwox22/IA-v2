const Pool = require('pg').Pool; //13:20

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: '2208lol',
    port : 5432
}) //14:00

module.exports = pool; //14:30