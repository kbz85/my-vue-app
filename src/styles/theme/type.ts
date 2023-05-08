export interface ThemeList {
    // 主题
  'white-color': string
  'primary-color': string
  'success-color': string
  'alarm-color': string
  'error-color': string
  'warning-color': string
  'info-color': string
  // 文字
  'title-color': string // 标题文字
  'text-color': string // 正文
  'text-color-secondary': string// 次级文字
  'disabled-color': string // 禁用型文字
  // 边框
  'border-color-base': string // 边框1
  'border-color-split': string // 边框2
  'border-color-tip': string // 边框3
  'border-color-disable': string // 边框4
  // 背景
  'bg-body': string
}

export interface VxeTableToAntVar {
  '$vxe-font-color': 'text-color'
  '$vxe-font-color': 'text-color'
  '$vxe-primary-color': 'primary-color'
  '$vxe-success-color': 'success-color'
  '$vxe-info-color': 'info-color'
  '$vxe-warning-color': 'warning-color'
  '$vxe-danger-color': 'error-color'
  '$vxe-disabled-color': 'disabled-color'
}