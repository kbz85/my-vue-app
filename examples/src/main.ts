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
// console.log(darkTheme);

const app = createApp(App);
const parseHexColor = (color: string) => {
    if (color.indexOf('#') === -1) return color
    let hex = color.slice(1)
    let a = 1
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }
    if (hex.length === 8) {
        a = parseInt(hex.slice(6), 16) / 255
        hex = hex.slice(0, 6)
    }
    const bigint = parseInt(hex, 16)
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
        a,
    }
}
const dom = document.getElementById('body')
Object.keys(darkTheme).map(key => {
    const color = parseHexColor(darkTheme[key]) as {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    const colorType = typeof color
    if (colorType === 'object') {
        dom.style.setProperty('--' + key, `rgba(${color.r},${color.g},${color.b}, ${color.a})`)
        dom.style.setProperty('--' + key + '-tailwindcss', `${color.r} ${color.g} ${color.b}`)
    }
})


app.use(Antd)
app.use(VXETable)
app.mount('#app')
