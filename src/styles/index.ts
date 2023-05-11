import './theme/vxe-table.scss'
import './theme/antd.less'
import { setStyleDom, generateVxeStyle } from './theme/color'
import { ThemeList } from './theme/type'

/**
 * @Description: 生成cssvar变量
 * @Author: z
 * @Date: 2023-05-08 15:48:42
 * @LastEditTime: Do not edit
 * @LastEditors: z
 * @param {ThemeList} themeList
 */
export function initTheme(themeList: ThemeList) {
    setStyleDom(themeList)
}