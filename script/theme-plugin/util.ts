import { ThemeList, VxeTableToAntVar } from "./type"

/**
 * @Description: 驼峰转下划线
 * @Author: z
 * @Date: 2023-05-04 15:39:29
 * @LastEditTime: Do not edit
 * @LastEditors: z
 * @param {*} str
 */
export function humpToUnderline(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase()
}
/**
 * 16进制颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
export const parseHexColor = (color: string) => {
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
  } as IColorObj
}

export function generateVxeStyle(themeList: ThemeList, valueMapping: Partial<VxeTableToAntVar>) {
  const baseVxeVar = {
    '$vxe-font-color': 'text-color',
    '$vxe-primary-color': 'primary-color',
    '$vxe-success-color': 'success-color',
    '$vxe-info-color': 'info-color',
    '$vxe-warning-color': 'warning-color',
    '$vxe-danger-color': 'error-color',
    '$vxe-disabled-color': 'disabled-color',
    '$vxe-table-header-font-color': 'title-color',
    '$vxe-table-footer-font-color': 'font-color',
    '$vxe-table-header-background-color': 'border-color-disable',
    '$vxe-table-body-background-color': 'bg-body',
    '$vxe-table-border-color': 'border-color-tip',
    '$vxe-table-row-hover-background-color': 'table-hover',
    '$vxe-table-row-striped-background-color': 'table-hover',
    '$vxe-table-row-hover-striped-background-color': 'table-hover',
    '$vxe-table-row-current-background-color': 'table-current',
    '$vxe-table-row-hover-current-background-color': 'table-current'
  }
  valueMapping = Object.assign({}, baseVxeVar, valueMapping)
  let str = ''
  for (let key in valueMapping) {
    str += `${key}: ${themeList[valueMapping[key]]};`
  }
  return str
}
export function setStyleDom(themeList) {
  // 1. 生成css变量
  const keys = Object.keys(themeList)
  const rootCssVar = `:root{$colors}`
  let rootColors = ''
  keys.forEach(key => {
    const color = parseHexColor(themeList[key])
    rootColors += `--${key}: rgba(${color.r},${color.g},${color.b}, ${color.a}); \n`
    rootColors += `--${key}-tailwindcss: ${color.r} ${color.g} ${color.b}; \n`
  })
  // 2. 配置:root下的cssVar 
  const styleNode = document.createElement('style')
  styleNode.setAttribute('theme', 'root-theme')
  styleNode.innerHTML = `:root {
    ${rootColors}
  }`
  // 3. 将style添加至根节点
  const head = document.querySelector('head') as Element
  const currentStyle = Array.from(head?.children).find((node) => {
    return node.tagName === 'STYLE' && node.getAttribute('theme') === 'root-theme'
  })
  if (currentStyle) head.removeChild(currentStyle)

  head.appendChild(styleNode)
}