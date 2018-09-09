module.exports = require('config-workspaces').getWebpackConfig(__dirname);
//
// or...
//
// const webpackConfig = require('config-workspaces').getWebpackConfig(__dirname);
//
// module.exports = function override(oldConfig, env) {
//   const newConfig = webpackConfig(oldConfig, env);
//   // do stuff with the webpack config...
//   return newConfig;
// }
