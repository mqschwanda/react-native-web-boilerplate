const path = require('path');
const fs = require('fs-extra');
const findRoot = require('find-root');

/**
 * get the root of the yarn workspaces repo
 * @param  {[type]} [from=__dirname] [description]
 * @return {[type]}                  [description]
 */
const getRoot = (from = __dirname) => findRoot(from, dir => {
  const pkg = path.join(dir, 'package.json');

  // test if the package exists and that workspaces are configured
  return fs.existsSync(pkg) && 'workspaces' in require(pkg);
});

module.exports = getRoot;
