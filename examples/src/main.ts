/*
 * @Author: kbz85 248997917@qq.com
 * @Date: 2023-05-25 10:14:21
 * @LastEditors: kbz85 248997917@qq.com
 * @LastEditTime: 2023-06-02 16:03:51
 * @FilePath: \my-vue-app\examples\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
// import './styles/index.css'
import Antd from 'ant-design-vue';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import 'ant-design-vue/dist/antd.variable.less'
import './styles/index.css';
import './styles/antd.less';
import './styles/vxe-table.scss';
import empty from '../../src/directive/empty/directive'
const app = createApp(App)

app.use(Antd)
app.use(VXETable)
app.use(empty)
app.mount('#app')

