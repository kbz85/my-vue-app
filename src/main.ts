import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.variable.min.css'
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.less';
import './styles/antd.less'

const app = createApp(App);

app.use(Antd).mount('#app');
