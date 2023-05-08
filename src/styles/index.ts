import './vxe-table.scss'
import './antd.less'
import { setStyleDom, generateVxeStyle } from './theme/color'
import { ThemeList } from './theme/type'

/**
 * @Description: 生成scss全局变量
 * 目前主要用于覆盖vxe-table主题
 * 后续涉及scss，可在此添加
 * @Author: z
 * @Date: 2023-05-08 15:47:43
 * @LastEditTime: Do not edit
 * @LastEditors: z
 * @param {ThemeList} themeList
 */
export function generateScss(themeList: ThemeList) {
    return generateVxeStyle(ThemeList)
}

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