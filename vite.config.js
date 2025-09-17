import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config amigable para Vercel/CI
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Si Vercel te marca algún paquete de Node (fs, path, etc.), agrégalo aquí.
      external: [],
    },
  },
})
