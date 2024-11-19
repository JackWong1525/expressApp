const userService = require('../services/userService');

async function getUsers(req, res) {
    try {
        const result = await userService.getUsers();
        res.status(200).json(result);
    }
    catch (error) {

    }
}

async function addUser(req, res) {
    try {
        const result = await userService.addUser();
        res.status(200).send('success');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { getUsers, addUser }