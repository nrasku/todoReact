var express = require('express');
var path = require('path');
var conf = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDev = require('webpack-dev-middleware'); //Connects to express
var webpackHot = require('webpack-hot-middleware'); //Enables Hot Reloading

var app = express();

var compiler = webpack(conf);

app.use(webpackDev(compiler, {noInfo: true, publicPath: conf.output.publicPath}));
app.use(webpackHot(compiler));

const port = 3000;

app.use(express.static('./dist'));

app.use('/', function(req, res) {
	res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, function(error) {
	if (error) throw error;
	console.log("App listening on port ", port);
});