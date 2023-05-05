import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import Antd from 'ant-design-vue';
import { themeList } from '../project.config'
import { initTheme } from './styles/index'
const app = createApp(App);
initTheme(themeList)
app.use(Antd).mount('#app');
