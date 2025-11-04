import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Grow-Your-Business/",
  plugins: [
    tailwindcss(),
  ],
})