import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Entrada principal
        main: path.resolve(__dirname, 'index.html'),
        // Entrada para la clase 1
        class1: path.resolve(__dirname, 'src/classes/class1/index.html'),
      },
    },
  },
})
