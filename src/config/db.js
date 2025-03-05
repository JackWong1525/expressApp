const { MongoClient } = require('mongodb');

//config keep all the database connection
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

module.exports = { connectDB }