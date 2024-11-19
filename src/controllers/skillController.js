const skillService = require('../services/skillService');

async function addSkill(req, res) {
    try {
        const result = await skillService.addSkill();
        res.status(200).json('success');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { addSkill };