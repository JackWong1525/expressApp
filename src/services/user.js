const { connectDB } = require('../config/db');

//get user
async function getUsers() {
    try {
        const db = await connectDB();
        const collection = db.collection('myDB');
        return await collection.find({}).toArray();
    }
    catch (error) {
        console.log(error);
    }
}

//add user
async function addUser() {
    try {
        const db = await connectDB();
        const collection = db.collection('myDB');
        return await collection.insertOne({ name: 'Firdaus', age: 30 })
    }
    catch (error) {
        console.log(error);
    }
}

//update user
async function udpateUser() {
    try {
        const db = await connectDB();
        const collection = db.collection('myDB');
        return await collection.insertOne({ name: 'Firdaus', age: 30 })
    }
    catch (error) {
        console.log(error);
    }
}

//delete user
async function deleteUser() {
    try {
        const db = await connectDB();
        const collection = db.collection('myDB');
        return await collection.insertOne({ name: 'Firdaus', age: 30 })
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    getUsers,
    addUser,
    udpateUser,
    deleteUser
}