import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    htmlInject(),
  ],
  server: {
    port: 3000,
  },
});
