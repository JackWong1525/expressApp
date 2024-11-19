const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//router.get('/user', userController.getUser()) passing promise / result

//express expect a function callback
router.get('/get', userController.getUsers);
router.get('/add', userController.addUser);

module.exports = router;