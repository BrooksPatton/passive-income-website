var express = require('express');

var apiRoutes = require('./routes/api');

var app = express();

app.use('/api/v1', apiRoutes.health);

module.exports = app;