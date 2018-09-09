const flatten = require('flatten');
const path = require('path');
const glob = require('glob');

const getRoot = require('./get-root');
const getPackages = require('./get-packages');

module.exports = function getWorkspaces(from) {
  const root = getRoot(from);
  const packages = getPackages(require(path.join(root, 'package.json')));

  return flatten(packages.map(name => glob.sync(path.join(root, `${name}/`)))); // The trailing / ensures only dirs are picked up
};
