import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages - change 'Amazon-Sopyosa' to your repo name
  base: '/Amazon-Sopyosa/',
})
