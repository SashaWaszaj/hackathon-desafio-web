import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5001,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
})