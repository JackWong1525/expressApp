const { PubSub } = require('@google-cloud/pubsub');
const pubsub = new PubSub();

const topic_name = 'My Topic';

async function publishMsg() {

}

module.exports = { publishMsg }