require('dotenv').config();

const mysql = require('mysql2');

const db = mysql.createConnection(process.env.MYSQL_URL);

db.connect((err) => {
    if (err) {
        console.log("Database connection error:", err);
        return;
    }

    console.log("Database connected");
});

module.exports = db;