module.exports = function getPackages(packageJson) {
  if (!('workspaces' in packageJson)) return null;

  const { workspaces } = packageJson;
  if (Array.isArray(workspaces)) return workspaces;

  return workspaces.packages || null;
}
