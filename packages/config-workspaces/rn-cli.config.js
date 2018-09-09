const path = require('path');
const blacklist = require('metro/src/blacklist');
const getWorkspaces = require('./get-workspaces');

module.exports = function getRnCliConfig(from, options = {}) {
  const workspaces = getWorkspaces(from);

  function getRoots() {
    return [
      path.resolve(from), // Keep project directory
      options.nodeModules || path.resolve(from, '../..', 'node_modules'), // Include forked package as a new root
    ].concat(workspaces)
  }
  /**
   * Metro resolver configuration
   * @see {@link https://facebook.github.io/metro/docs/en/configuration#resolver-options}
   */
  const config = {
    getBlacklistRE() {
      return blacklist(workspaces.map(workspace =>
        `/${workspace.replace(/\//g, '[/\\\\]')}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`
      ));
    },
    getProjectRoots: getRoots,
    /**
     * Specify where to look for assets that are referenced using
     * `image!<image_name>`. Asset directories for images referenced using
     * `./<image.extension>` don't require any entry in here.
     */
    getAssetRoots: getRoots,
    extraNodeModules: {
      'react-native': path.resolve(from, 'node_modules/react-native'),
      // '@expo/vector-icons': path.resolve(from, 'node_modules/@expo/vector-icons'),
    },
  };

  return config;
};
