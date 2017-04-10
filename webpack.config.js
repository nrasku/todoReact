var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	devtool: debug ? 'inline-source-map' : null,
	entry: [
			'webpack-hot-middleware/client',
			'./client/client.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'react-hmre']
				}
			}
		]
	}
}