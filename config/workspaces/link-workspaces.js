const getRoot = require('./get-root');
const link = require('./link');

/**
 * [linkWorkspaces description]
 * @param  {[type]} from [description]
 * @return {[type]}      [description]
 */
function linkWorkspaces(from) {
  const root = getRoot(); // workspaces root
  const linkRootFrom = (name) => link(name, root, from);

  linkRootFrom('expo'); // link expo
  linkRootFrom('react-native'); // link react-native
  linkRootFrom('jest'); // link react-native
}

module.exports = linkWorkspaces;
