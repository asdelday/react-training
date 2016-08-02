const path = require('path');

module.exports = {
  devtool: '#source-map',
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/dist/',
  },
};
