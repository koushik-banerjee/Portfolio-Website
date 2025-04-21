import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Website/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
})
