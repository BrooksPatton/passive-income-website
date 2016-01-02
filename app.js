var express = require('express');

var apiRoutes = require('./routes/api');
var webRoutes = require('./routes/web');

var app = express();

app.use('/', webRoutes);
app.use('/api/v1', apiRoutes.health);

module.exports = app;