const s = require('../services');

//get all users
async function getUsers(req, res) {
    try {
        const result = await s.user.getUsers();
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internet Server Error" })
    }
}

async function getUserById(req, res) {
    try {
        const result = await s.user.getUserById();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Internet Server Error" })
    }
}

async function addUser(req, res) {
    try {
        const result = await s.user.addUser();
        res.status(200).send('success');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internet Server Error" })
    }
}

async function udpateUser(params) {
    try {
        const result = await s.user.udpateUser();
        res.status(200).send('success');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internet Server Error" })
    }
}

async function deleteUser(params) {
    try {
        const result = await s.user.udpateUser();
        res.status(200).send('success');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internet Server Error" })
    }
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    udpateUser,
    deleteUser
}