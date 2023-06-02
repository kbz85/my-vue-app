import { Theme } from "./type"

export const lightTheme: Theme = {
  // 主题
  'white-color': '#ffffff',
  'black-color': '#000000',
  'primary-color': '#1890ff',
  'primary-color-hover': '#309bff',
  'primary-color-active': '#1681e5',
  'primary-color-disabled': '#74bdff',
  'success-color': '#52c41a',
  'success-color-hover': '#64ca31',
  'success-color-active': '#4ab017',
  'success-color-disabled': '#97dc76',
  'alarm-color': '#faad14',
  'alarm-color-hover': '#fbb52c',
  'alarm-color-active': '#e19b12',
  'alarm-color-disabled': '#fcce72',
  'error-color': '#ff4d4f',
  'error-color-hover': '#ff5f61',
  'error-color-active': '#e54547',
  'error-color-disabled': '#ff9496',
  'warning-color': '#fadb14',
  'warning-color-hover': '#fbd42c',
  'warning-color-active': '#e1c512',
  'warning-color-disabled': '#fcea72',
  'info-color': '#8b909f',
  'info-color-hover': '#979ba9',
  'info-color-active': '#7d818f',
  'info-color-disabled': '#babdc6',
  // 文字
  'title-color': '#000000d9', // 标题文字
  'text-color': '#000000a6', // 正文
  'text-color-secondary': '#00000073', // 次级文字
  'disabled-color': '#00000040', // 禁用型文字
  // 边框
  'border-base-color': '#00000026', // 边框1
  'border-color-split': '#0000000f', // 边框2
  'border-color-tip': '#0000000a', // 边框3
  'border-color-disabled': '#00000005', // 边框4
  // 背景
  'bg-body': '#f9fbfc',
  // 单个组件样式覆盖
  'tooltip-bg': '#ffffff',
  'tooltip-color': '@text-color',
  'model-bg': '#ffffff',
  'table-hover': '@primary-color-hover',
  'table-current': '@primary-color-active',
  'background-color-light': '#ffffff',

  'modal-header-bg': '@model-bg',
  'modal-content-bg': '@model-bg',
  'modal-footer-bg': '@model-bg',
}


export const darkTheme: Theme = {
  'white-color': '#ffffff',
  'black-color': '#000000',
  'primary-color': '#1890ff',
  // 'primary-color': '#1890ff',
  'primary-color-hover': '#3090ea',
  'primary-color-active': '#1676d0',
  'primary-color-disabled': '#0f4f8b',
  'success-color': '#52c41a',
  'success-color-hover': '#5eb836',
  'success-color-active': '#449e1c',
  'success-color-disabled': '#2e6a13',
  'alarm-color': '#faad14',
  'alarm-color-hover': '#e1a631',
  'alarm-color-active': '#c78c17',
  'alarm-color-disabled': '#865e10',
  'error-color': '#ff4d4f',
  'error-color-hover': '#e65c5f',
  'error-color-active': '#cc4245',
  'error-color-disabled': '#892c2e',
  'warning-color': '#fadb14',
  'warning-color-hover': '#e1ca31',
  'warning-color-active': '#c8b017',
  'warning-color-disabled': '#867610',
  'info-color': '#8b909f',
  'info-color-hover': '#8b909f',
  'info-color-active': '#717684',
  'info-color-disabled': '#4c4f58',
  // 文字
  'title-color': '#ffffffd9', // 标题文字
  'text-color': '#ffffffa6', // 正文
  'text-color-secondary': '#ffffff73', // 次级文字
  'disabled-color': '#ffffff40', // 禁用型文字
  // 边框
  'border-base-color': '#ffffff40', // 边框1
  'border-color-split': '#ffffff33', // 边框2
  'border-color-tip': '#ffffff1f', // 边框3
  'border-color-disabled': '#ffffff14', // 边框4

  // 背景
  'bg-body': '#292d45',
  'tooltip-bg': '#54576a',
  'model-bg': '#39415a',
  'table-hover': '#1890ff22',
  'table-current': '#1890ffa8',
  'background-color-light': '#54576a',

  'modal-header-bg': '@model-bg',
  'modal-content-bg': '@model-bg',
  'modal-footer-bg': '@model-bg',

  'primary-1': '@primary-color-active',
  'primary-2': '@primary-color-active',
  'primary-3': '@primary-color-active',
  'primary-4': '@primary-color-active',
  'primary-5': '@primary-color-active',
  'primary-6': '@primary-color-active',
  'primary-7': '@primary-color-active',
  'primary-8': '@primary-color-active',
  'primary-9': '@primary-color-active',
  'primary-10': '@primary-color-active',
  // 黑暗模式需要兼容样式

  'component-background': '@background-color-light',
  'background-color-base': '@background-color-light',
  'item-hover-bg': '@background-color-light',
  // 单个组件样式覆盖
  'checkbox-check-bg': '@background-color-light',
  'alert-message-color': '@white-color',
  'heading-color': '@text-color',
  'divider-color': '@border-color-split',
  'select-item-selected-bg': '@primary-color',
  'picker-basic-cell-hover-with-range-color': 'fade(@primary-color, 20)',
  'picker-basic-cell-active-with-range-color': 'fade(@primary-color, 20)',
  'slider-dot-border-color-active': '@primary-color',
  'slider-track-color-active': '@primary-color',
  'slider-rail-background-color-hover': '@border-base-color',
  'slider-track-background-color': '@primary-color',
  'slider-track-background-color-hover': '@primary-color',
  'tree-node-selected-bg': '@primary-color',

  'tooltip-color': '@text-color'
}