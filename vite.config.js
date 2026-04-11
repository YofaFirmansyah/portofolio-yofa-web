import { defineConfig } from 'vite'

export default defineConfig({
  // Base path for GitHub Pages or Vercel sub-paths
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
