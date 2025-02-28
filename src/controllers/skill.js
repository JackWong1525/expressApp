const s = require('../services');

async function addSkill(req, res) {
    try {
        const result = await s.skill.addSkill();
        res.status(200).json('success');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { addSkill };