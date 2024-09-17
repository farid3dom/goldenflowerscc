import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  assetsInclude: ['**/*.glb'],
  server: {
    port: 3000,
    host: true
  }
})
