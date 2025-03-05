const { connectDB } = require('../config/db');

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