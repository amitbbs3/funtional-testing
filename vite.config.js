import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istambul from "vite-plugin-istanbul"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  istambul({
    cypress: true,
    requireEnv: false
  }),
]
})
