const { MongoClient } = require('mongodb');

//connection url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//connect db
async function connectDB() {
    try {
        await client.connect();
        return client.db('myDB');
    }
    catch (error) {
        console.log(error)
    }
}

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

module.exports = { getUsers, addUser }