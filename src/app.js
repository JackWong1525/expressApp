const express = require('express');
const userRoutes = require('./routers/userRoutes');
const skillRoutes = require('./routers/skillRoutes');
const app = express();

app.use('/user', userRoutes); //prefixed with user
app.use('/skill', skillRoutes); //prefixed with skill

module.exports = app;