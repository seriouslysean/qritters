import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: mode === 'production' ? '/qritters/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~assets': path.resolve(__dirname, 'src/assets'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~utils': path.resolve(__dirname, 'src/utils'),
      }
    }
  }
})
