const path = require('path');
const fs = require('fs-extra');

const getRoot = require('./get-root');

const link = (name, fromBase, toBase) => {
  const from = path.join(fromBase, 'node_modules', name);
  const to = path.join(toBase, 'node_modules', name);

  if (fs.existsSync(to)) fs.removeSync(to);

  fs.symlinkSync(from, to, 'dir');
};

module.exports = function linkWorkspaces(from) {
  const root = getRoot();

  link('expo', root, from);
  link('react-native', root, from);
}
