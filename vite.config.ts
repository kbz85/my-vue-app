import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { themeList } from './project.config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: Object.assign({}, themeList)
      }
    }
  }
})
