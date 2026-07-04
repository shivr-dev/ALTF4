import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' makes all asset paths relative — works for both root and project GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
