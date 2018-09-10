const path = require('path');

const getWorkspaces = require('./get-workspaces');

/**
 * [getWebpackConfig description]
 * @param  {[type]} from [description]
 * @return {[type]}      [description]
 */
const getWebpackConfig = (from) =>
  /**
   * [configWebpackWorkspaces description]
   * @param  {[type]} config [description]
   * @param  {[type]} env    [description]
   * @return {[type]}        [description]
   */
  function configWebpackWorkspaces(config, env) {
    const babel = config.module.rules
      .find(rule => 'oneOf' in rule)
      .oneOf.find(rule => /babel-loader/.test(rule.loader));

    if (!Array.isArray(babel.include)) babel.include = [babel.include];

    babel.include = babel.include
      .concat(getWorkspaces(from).map((dir) => path.resolve(dir)));

    return config;
  }

module.exports = getWebpackConfig;
