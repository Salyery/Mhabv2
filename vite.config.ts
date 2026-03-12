import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // GitHub Pages SPA fallback: 404 serves index.html
    {
      name: 'copy-404',
      closeBundle() {
        const dist = path.resolve(__dirname, 'dist')
        fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
        fs.writeFileSync(path.join(dist, '.nojekyll'), '')
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
