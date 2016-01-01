if(process.env.NODE_ENV === 'development') require('dotenv').load();

var app = require('../app');

app.listen(process.env.PORT, function(){
	console.log('Web server started on port %d', process.env.PORT);
});