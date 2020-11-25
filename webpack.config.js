const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const WebpackBar = require('webpackbar');

module.exports = {
	entry: './src/index.js',
	externals: [nodeExternals()],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: '',
		libraryTarget: 'commonjs'
	},
	plugins: [new CleanWebpackPlugin(), new WebpackBar()],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.less$/,
				use: [
					'css-hot-loader',
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.css$/,
				use: [
					'css-loader',
				],
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'file-loader',
				}]
			},
		]
	}
}
