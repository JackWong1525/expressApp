const { MongoClient } = require('mongodb');

//config keep all the database connection
//connection url

const url = process.env.MONGO_URI;
console.log('Connecting to Mongo with URI:', process.env.MONGO_URI);

const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        return client.db("expressDB")
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB }