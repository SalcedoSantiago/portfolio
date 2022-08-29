import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://c1801477.ferozo.com/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
