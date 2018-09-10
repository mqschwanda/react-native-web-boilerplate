const path = require('path');
const fs = require('fs-extra');

/**
 * [link description]
 * @param  {[type]} name     [description]
 * @param  {[type]} fromBase [description]
 * @param  {[type]} toBase   [description]
 * @return {[type]}          [description]
 */
const link = (name, fromBase, toBase) => {
  const from = path.join(fromBase, 'node_modules', name); // origin location
  const to = path.join(toBase, 'node_modules', name); // symlinked location

  // delete the location we are trying to symlink to if it already exists
  if (fs.existsSync(to)) fs.removeSync(to);

  fs.symlinkSync(from, to, 'dir'); // make symlink
};

module.exports = link;
