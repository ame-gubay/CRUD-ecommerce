// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // use your MySQL username
    password: 'amare',  // use your MySQL password
    database: 'ecommerce'  // your database name
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;
