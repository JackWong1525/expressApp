const express = require("express");
const router = express.Router();
const c = require('../controllers');
// const m = require('../middleware');

/**
 * @openapi
 * /skill/add:
 *   get:
 *     summary: Add a new skill
 *     description: Calls the addSkill function to insert a new skill into the database.
 *     tags:
 *       - Skills
 *     responses:
 *       200:
 *         description: Skill added successfully
 *       500:
 *         description: Server error
 */
router.get('/add', c.skill.addSkill);

module.exports = router;