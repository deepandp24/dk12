/**
 * Resolves static asset paths against Vite's configured BASE_URL (e.g. for GitHub Pages subpaths)
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export default asset;
