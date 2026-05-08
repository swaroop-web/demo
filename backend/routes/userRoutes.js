const express = require('express');

const router = express.Router();

const {
    getUsers,
    addUser,
    deleteUser,
    updateUser
} = require('../controllers/userControllers');

router.get("/users", getUsers);

router.post("/users", addUser);

router.put("/users/:id/:name", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;