const db = require('../config/db');

exports.getUsers = (req,res)=>{

    const sql = "select * from user";

    db.query(sql,(err,result)=>{

        if(err){
            res.status(500).send("error occured");
            return;
        }

        res.json(result);

    });

};


exports.addUser = (req,res)=>{

    const name = req.body.name;

    if(!name || name.trim()===""){
        res.status(400).send("name required");
        return;
    }

    const sql = "insert into user(name) values(?)";

    db.query(sql,[name],(err,result)=>{

        if(err){
            res.status(500).send("error occured");
            return;
        }

        res.send("user added successfully");

    });

};

exports.deleteUser=(req,res)=>{
    const id=req.params.id;

    const sql="delete from user where id=?";

    db.query(sql,[id],(err,result)=>{
        if(err){
            res.status(500).send("error occured");
            return;
        }
        res.send("user deleted successfully");

    });
}

exports.updateUser=(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
    if(!name || name.trim()===""){
        res.status(400).send("enter name ");
        return;
    }

    const sql="update user set name=? where id=?";

    db.query(sql,[name,id],(err,result)=>{
        if(err){
            res.status(500).send("error occured");
            return;
        }
        res.send(result);
    });
}