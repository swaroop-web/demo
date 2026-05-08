const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"demo"
});

db.connect((err)=>{

    if(err){
        console.log("database connection error");
        return;
    }

    console.log("database connected");

});

module.exports = db;