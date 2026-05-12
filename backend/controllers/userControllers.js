const db = require('../config/db');

// GET USERS
exports.getUsers = (req, res) => {

    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error fetching users"
            });
            return;
        }

        res.status(200).json(result);

    });

};

// ADD USER
exports.addUser = (req, res) => {

    const name = req.body.name;

    if (!name || name.trim() === "") {
        res.status(400).json({
            message: "Name is required"
        });
        return;
    }

    const sql = "INSERT INTO users(name) VALUES(?)";

    db.query(sql, [name], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error adding user"
            });
            return;
        }

        res.status(201).json({
            message: "User added successfully",
            id: result.insertId
        });

    });

};

// DELETE USER
exports.deleteUser = (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM users WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error deleting user"
            });
            return;
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    });

};

// UPDATE USER
exports.updateUser = (req, res) => {

    const id = req.params.id;
    const name = req.params.name;

    if (!name || name.trim() === "") {
        res.status(400).json({
            message: "Enter name"
        });
        return;
    }

    const sql = "UPDATE users SET name=? WHERE id=?";

    db.query(sql, [name, id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).json({
                message: "Error updating user"
            });
            return;
        }

        res.status(200).json({
            message: "User updated successfully"
        });

    });

};