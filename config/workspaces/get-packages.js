/**
 * get an array of workspaces from a `package.json` configuration object.
 * @param  {[type]} packageJson `package.json`
 * @return {[type]}             workspaces or null
 */
function getPackages(packageJson) {
  // no workspaces
  if (!('workspaces' in packageJson)) return null;

  // workspaces configured as an array
  const { workspaces } = packageJson;
  if (Array.isArray(workspaces)) return workspaces;

  // workspaces configured as an object
  if ('packages' in workspaces) return workspaces.packages;

  // fallback if no workspaces are found
  return null;
}

module.exports = getPackages;
