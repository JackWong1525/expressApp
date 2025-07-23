const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'local'; // fallback if not set
dotenv.config({ path: `.env.${env}` });

console.log('Loaded env file:', `.env.${env}`);
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`✅ App listening on port ${port}`);
});
