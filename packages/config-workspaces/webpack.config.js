const path = require('path');

const getWorkspaces = require('./get-workspaces');

module.exports = function getWebpackConfig(from) {
  return function configWebpackWorkspaces(config, env) {
    const babel = config.module.rules
      .find(rule => 'oneOf' in rule)
      .oneOf.find(rule => /babel-loader/.test(rule.loader));

    if (!Array.isArray(babel.include)) babel.include = [babel.include];

    babel.include = babel.include
      .concat(getWorkspaces(from).map((dir) => path.resolve(dir)));

    return config
  }
};
