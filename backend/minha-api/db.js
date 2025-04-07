const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '170805',
    database: 'expcriativadb'
});

db.connect(err => {
    if (err) { 
        throw err;
    }
    console.log('Conectado ao MySQL');
});

module.exports = db;