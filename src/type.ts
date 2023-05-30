export interface Theme {
  'white-color': string
  'black-color': string
  'primary-color': string
  'primary-color-hover': string
  'primary-color-active': string
  'primary-color-disable': string
  'success-color': string
  'success-color-hover': string
  'success-color-active': string
  'success-color-disable': string
  'alarm-color': string
  'alarm-color-hover': string
  'alarm-color-active': string
  'alarm-color-disable': string
  'error-color': string
  'error-color-hover': string
  'error-color-active': string
  'error-color-disable': string
  'warning-color': string
  'warning-color-hover': string
  'warning-color-active': string
  'warning-color-disable': string
  'info-color': string
  'info-color-hover': string
  'info-color-active': string
  'info-color-disable': string
  // 文字
  'title-color': string// 标题文字
  'text-color': string // 正文
  'text-color-secondary': string // 次级文字
  'disabled-color': string // 禁用型文字
  // 边框
  'border-color-base': string // 边框1
  'border-color-split': string// 边框2
  'border-color-tip': string // 边框3
  'border-color-disable': string // 边框4

  // 背景
  'bg-body': string
  'model-bg': string
  'tooltip-bg': string,
  'table-hover': string,
  'table-current': string,
  'background-color-light': string,
  [key:string]: string
}

export interface ThemeOptions{
  antdvVars:{
    [key:string]:string | number
  },
  vxeTableVars:{
    [key:string]:string | number

  }
}