const getWorkspaces = require('./get-workspaces');
const getWebpackConfig = require('./webpack.config');
const getRnCliConfig = require('./rn-cli.config');
const linkWorkspaces = require('./link-workspaces');

module.exports = {
  getWorkspaces,
  getWebpackConfig,
  getRnCliConfig,
  linkWorkspaces,
};
