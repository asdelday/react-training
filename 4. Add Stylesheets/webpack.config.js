const path = require('path');
const webpack = require('webpack');

const __TARGET__ = process.env.npm_lifecycle_event;
let webpackConfig;

/* DEVELOPMENT CONFIG
 ------------------------------------------------------------------------------------------------ */
if (__TARGET__ === 'dev') {
  webpackConfig = {
    devtool: '#source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/client.js',
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      sourceMapFilename: 'bundle.map',
      publicPath: '/dist/',
    },
    module: {
      loaders: [
        { test: /\.css$/, loaders: ['style', 'css'], include: path.join(__dirname, 'src') },
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('development') },
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
}

/* PRODUCTION CONFIG
 ------------------------------------------------------------------------------------------------ */
else {
  webpackConfig = {
    devtool: '#source-map',
    entry: './src/client.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      sourceMapFilename: 'bundle.map',
      publicPath: '/dist/',
    },
    module: {
      loaders: [
        { test: /\.css$/, loaders: ['style', 'css'], include: path.join(__dirname, 'src') },
        { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'src') },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('production') },
      }),
    ],
  };
}

module.exports = webpackConfig;
