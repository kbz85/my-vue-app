import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import Antd from 'ant-design-vue';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import 'ant-design-vue/dist/antd.less'

const app = createApp(App);

app.use(Antd)
app.use(VXETable)
app.mount('#app')