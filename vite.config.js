import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/projeto/', // <- nome do repositório aqui, com barra no início e no fim
  plugins: [react(), tailwindcss()],
})
