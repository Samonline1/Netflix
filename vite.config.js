import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: '404-fallback',
      closeBundle() {
        // Copy index.html to 404.html after build
        if (existsSync('dist/index.html')) {
          copyFileSync('dist/index.html', 'dist/404.html')
          console.log('✅ Created 404.html fallback for GitHub Pages')
        }
      },
    },
  ],
})
