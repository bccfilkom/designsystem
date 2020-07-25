const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './components/index.tsx',
	externals: [nodeExternals()],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: '',
		libraryTarget: 'commonjs'
	},
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, './src')
			}
		]
	}
}