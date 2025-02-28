const s = require('../services');

async function getUsers(req, res) {

    console.log('1');

    try {
        const result = await s.user.getUsers();
        res.status(200).json(result);
    }
    catch (error) {

    }
}

async function addUser(req, res) {
    console.log('1');
    try {
        const result = await s.user.addUser();
        res.status(200).send('success');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { getUsers, addUser }