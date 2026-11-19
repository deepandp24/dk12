import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Check if running on Netlify (NETLIFY env is set automatically by Netlify build containers)
  const isNetlify = process.env.NETLIFY === 'true' || process.env.CONTEXT === 'production' || process.env.SITE_NAME !== undefined;

  // Local dev server runs at root '/'.
  // Netlify or root domains run at '/'.
  // GitHub Pages repo default subpath runs at '/dk12/'.
  const basePath = command === 'serve'
    ? '/'
    : (process.env.BASE_PATH || (isNetlify ? '/' : '/dk12/'));

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
    ],
  };
});
