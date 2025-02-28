const { MongoClient } = require('mongodb');

//connection url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        return client.db("myDB")
    }
    catch (error) {
        console.log(error);
    }
}

async function addSkill() {
    try {
        const db = await connectDB();
        const collection = db.collection('mySkills');
        return await collection.insertOne({ skill: 'React', pro: 'Pro' })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { addSkill }