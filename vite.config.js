import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    // 💡 只有在執行 build/deploy（打包）時才使用 github 子路徑，本地測試時用根目錄 '/'
    base: command === 'build' ? '/claudia-slowwrite/' : '/',
  }
})