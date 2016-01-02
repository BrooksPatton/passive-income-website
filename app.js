var express = require('express');
var jade = require('jade');

var apiRoutes = require('./routes/api');
var webRoutes = require('./routes/web');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/', webRoutes);
app.use('/api/v1', apiRoutes.health);

module.exports = app;