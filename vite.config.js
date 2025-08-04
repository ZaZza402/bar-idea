import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // QUESTA RIGA È LA PIÙ IMPORTANTE DI TUTTE
  base: '/bar-idea/', 
  plugins: [react()],
})