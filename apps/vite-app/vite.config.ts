import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'Vue'
    })
  ]
})
