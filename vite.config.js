import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route clean and .html navigations to React's index.html so legacy root .html files do not shadow SPA routes in dev.
function spaRouteFallbackPlugin() {
  return {
    name: 'spa-route-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next();
        const accept = req.headers.accept || '';
        if (!accept.includes('text/html')) return next();

        const pathname = (req.url || '/').split('?')[0];
        if (
          pathname.startsWith('/@') ||
          pathname.startsWith('/__') ||
          pathname.startsWith('/src/') ||
          pathname.startsWith('/node_modules/') ||
          pathname.startsWith('/assets/')
        ) {
          return next();
        }

        const ext = path.posix.extname(pathname);
        if (ext === '' || ext === '.html') {
          req.url = '/index.html';
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), spaRouteFallbackPlugin()],
  server: {
    port: 5174,
    host: true
  },
  preview: {
    port: 5174,
    host: true
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@services': path.resolve(__dirname, './src/services'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@context': path.resolve(__dirname, './src/contexts')
    }
  }
});
