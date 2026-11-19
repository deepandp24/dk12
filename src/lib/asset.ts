/**
 * Resolves static asset paths against runtime host / GitHub Pages subpath
 */
export const asset = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  let base = '/';
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/dk12')) {
    base = '/dk12/';
  } else if (typeof import.meta !== 'undefined' && import.meta?.env?.BASE_URL) {
    base = import.meta.env.BASE_URL;
  }
  
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export default asset;
