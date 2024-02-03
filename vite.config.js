import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/modelresolver': {
        target: 'http://localhost:8000', // L'URL de votre backend Django
        changeOrigin: true, // pour éviter les problèmes liés à l'origine
        secure: false, // si votre backend n'utilise pas HTTPS
        ws: true,
      },
    },
  },
})
