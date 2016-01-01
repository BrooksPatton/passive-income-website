var express = require('express');

var router = express.Router();

router.get('/health', function(req, res, next){
	var message = {status: 'running'};

	res.json(message);
});

module.exports = router;