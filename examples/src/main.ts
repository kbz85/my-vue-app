/*
 * @Author: kbz85 248997917@qq.com
 * @Date: 2023-05-25 10:14:21
 * @LastEditors: kbz85 248997917@qq.com
 * @LastEditTime: 2023-05-29 18:38:21
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
const dom = document.getElementById('body') as HTMLDivElement
console.log(darkTheme);
function setVarColor(colorStr:string, key: string | undedined) {
    const color = parseHexColor(colorStr) as {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    const colorType = typeof color
    if (colorType === 'object') {
        dom.style.setProperty('--' + key, `rgba(${color.r},${color.g},${color.b}, ${color.a})`)
        dom.style.setProperty('--' +  key + '-tailwindcss', `${color.r} ${color.g} ${color.b}`)
        return true
    } else {
        return false
    }
}
Object.keys(darkTheme).map(key => {
    const canSetVarColor = setVarColor(darkTheme[key], key)
    if (!canSetVarColor) {
        const correspondKey = darkTheme[key]    
        if (correspondKey) {
            const resetColor = darkTheme[correspondKey.substring(1)]    
            if (resetColor) setVarColor(resetColor, key)
        }
    }
})


app.use(Antd)
app.use(VXETable)
app.mount('#app')
