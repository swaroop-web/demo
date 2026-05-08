const express = require('express');
const cors=require('cors');
const mysql=require('mysql2');
const app=express();
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"demo"
})
db.connect(err=>{
    if(err){
        console.log("error connecting to database");
        return;
    }           
})


app.get("/users",(req,res)=>{
    const sql="select * from user";
    db.query(sql,(err,result)=>{
        if(err){
            res.status(500).send("error occured");
            return;
        }                       
    res.send(result);
})
});
app.post("/users",(req,res)=>{
    const name=req.body.name;
    const sql="insert into user(name) values(?)";
    db.query(sql,[name],(err,result)=>{
        if(err){
            res.status(500).send("error occured");
            return;
        }
        console.log("data base connected and data inserted");
        res.send("user added succefully");
    })
});

app.listen(5000,()=>{
    console.log("server running");
});