const express = require('express');
const app = express();
const r = require('./routers');
const m = require('./middleware');

require('./swagger')(app);

//app.use runs middleware for all requests
//prefix-based matching
app.use('/user', m.validate, r.user); //prefixed with user
app.use('/skill', r.skill); //prefixed with skill
app.use('/auth', r.auth);

module.exports = app;