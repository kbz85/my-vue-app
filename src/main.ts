import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import Antd from 'ant-design-vue';
import { lightThemeList, darkThemeList } from '../project.config'
import { initTheme } from './styles/index'
const app = createApp(App);
// 
console.log(import.meta.env.VITE_APP_THEME);

if (import.meta.env.VITE_APP_THEME === 'light') {
    initTheme(lightThemeList)
} else {
    initTheme(darkThemeList)
}
app.use(Antd).mount('#app');
