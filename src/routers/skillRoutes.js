const express = require("express");
const router = express.Router();
const skillController = require('../controllers/skillController');

router.get('/add', skillController.addSkill);

module.exports = router;