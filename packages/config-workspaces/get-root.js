const path = require('path');
const fs = require('fs-extra');
const findRoot = require('find-root');

module.exports = function getRoot(from) {
  return findRoot(from, dir => {
    const pkg = path.join(dir, 'package.json');

    return fs.existsSync(pkg) && 'workspaces' in require(pkg);
  });
};
