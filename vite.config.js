import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 💡 直接鎖定專案子路徑，不進行動態判斷，徹底防錯
  base: '/claudia-slowwrite/',
})