const path = require('path');

let config = {
	entry: './tests.js',
	mode: 'development',
	output: {
		filename: 'jasmine.latest.js',
		path: path.resolve(__dirname, 'build')
	}
};

module.exports = config;
