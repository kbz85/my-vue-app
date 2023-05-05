import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { lightThemeList, darkThemeList } from './project.config'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env);
  
  return {
    // vite config
    plugins: [vue()],
    server: {
      host: true
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: env.VITE_APP_THEME === 'light' ? lightThemeList : darkThemeList
        }
      }
    }
  }
})


