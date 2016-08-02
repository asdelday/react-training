# 2. Improve Development Environment

  * Add Hot Module Replacement.
  * Add Babel compilation.
  * Add DevServer.
  * Configure production and development environments
  

### Steps:

  * Continue from the previous project...
  * Install react-hot-loader: `npm i -D react-hot-loader`
  * Install babel: `npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0`
  * Install webpack-dev-server: `npm i -D webpack-dev-server`
  * Install react and react-dom (react-hot-loader requires react as peerDependency): `npm i -S react react-dom`
  * Configure `loaders` in `webpack.config.js` for js files.
  * Configure `plugins` in `webpack.config.js`.
  * Create script in `package.json` to run webpack dev server.
  * Difference between `build -> production` and `dev -> development` to bundle with Webpack.
    Tips: You can use ENV variables or (just for a quick approach) `process.env.npm_lifecycle_event`.
  * Run webpack dev server and test it (Try to modify `./src/client` while `webpack-dev-server` is running).
   
