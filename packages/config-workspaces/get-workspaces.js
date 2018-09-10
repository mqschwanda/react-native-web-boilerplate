const flatten = require('flatten');
const path = require('path');
const glob = require('glob');

const getRoot = require('./get-root');
const getPackages = require('./get-packages');

/**
 * [getWorkspaces description]
 * @param  {[type]} [from = __dirname] [description]
 * @return {[type]}                    [description]
 */
function getWorkspaces(from = __dirname) {
  const root = getRoot(from); // workspaces root
  const pkg = require(path.join(root, 'package.json')); // workspaces `package.json` contents
  const packages = getPackages(pkg); // array of worksace packages

  // synchronous glob search to get a directory from package name
  const getPackageDir = name => glob.sync(path.join(root, `${name}/`));

  // flatten arrays of arrays into a single array of non-arrays.
  return flatten(packages.map(getPackageDir));
}

module.exports = getWorkspaces;
