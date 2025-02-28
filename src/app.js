const express = require('express');
const app = express();

const r = require('./routers');

//app.use runs middleware for all requests
//prefix-based matching
//
app.use('/user', r.user); //prefixed with user
app.use('/skill', r.skill); //prefixed with skill

module.exports = app;