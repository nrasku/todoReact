var express = require('express');
var path = require('path');

var app = express();

const port = 3000;

app.use(express.static('./dist'));

app.use('/', function(req, res) {
	res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, function(error) {
	if (error) throw error;
	console.log("App listening on port ", port);
});