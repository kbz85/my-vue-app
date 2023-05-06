import 'ant-design-vue/dist/antd.less'
import './vxe-table.scss'
import './antd.less'
import { setStyleDom } from './theme/color'
import { ThemeList } from './theme/type'

export function initTheme(themeList: ThemeList) {
    setStyleDom(themeList)
}