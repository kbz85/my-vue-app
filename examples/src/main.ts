/*
 * @Author: kbz85 248997917@qq.com
 * @Date: 2023-05-25 10:14:21
 * @LastEditors: kbz85 248997917@qq.com
 * @LastEditTime: 2023-05-30 11:38:47
 * @FilePath: \my-vue-app\examples\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
import { darkTheme } from '../project.config'

const app = createApp(App);

app.use(Antd)
app.use(VXETable)
app.mount('#app')
