const express = require("express");
const router = express.Router();
const c = require('../controllers');
// const m = require('../middleware');

router.get('/add', c.skill.addSkill);

module.exports = router;