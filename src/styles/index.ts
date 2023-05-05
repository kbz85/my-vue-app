import 'ant-design-vue/dist/antd.less'
import './antd.less'
import { setStyleDom } from './theme/color'
import { ThemeList } from './theme/type'
import { themeList } from '/project.config.ts'

export function initTheme(themeList: ThemeList) {
    setStyleDom(themeList)
}