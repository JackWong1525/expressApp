//starting the server
const app = require('./app');
const port = 5000;

app.listen(port, () => {
    console.log('app listening to port 5000')
})