import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['6554277bed78.ngrok-free.app', 'vast-tables-push.loca.lt'],
  },
  build: {
    // ✅ Increase the warning limit (optional)
    chunkSizeWarningLimit: 1500,

    // ✅ Split vendor libraries into their own chunks
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          gsap: ['gsap'], // if you’re using GSAP heavily
          // add other heavy deps here
        },
      },
    },
  },
})
