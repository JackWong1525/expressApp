const express = require('express');
const router = express.Router();
const c = require('../controllers');

//router.get('/user', userController.getUser()) passing promise / result

//express expect a function callback
router.get('/get', c.user.getUsers);
router.get('/add', c.user.addUser);

module.exports = router;