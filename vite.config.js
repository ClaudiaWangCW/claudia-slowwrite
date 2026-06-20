import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/claudia-slowwrite/', // ⚠️ 這行非常重要！前後都要有斜線，名稱要跟等一下建立的 GitHub 倉庫名稱一致
})