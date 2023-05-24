// import { lightTheme as theme1, darkTheme as theme2 } from './script/theme-plugin/theme/theme-default'
// import { lightTheme as theme1, darkTheme as theme2  } from "./script/theme-plugin/theme/theme-default"
// 白色主题
// export const lightTheme = Object.assign({}, theme1)
// 黑色主题
export const bigDataTheme = {
    'root-entry-name': 'variable',
    'white-color': '#ffffff',
    'black-color': '#000000',
    'primary-color': 'var(--text-color)',
    // 'primary-color': '#1890ff',
    'primary-color-hover': '#3090ea',
    'primary-color-active': '#1676d0',
    'primary-color-disable': '#0f4f8b',
    'success-color': '#52c41a',
    'success-color-hover': '#5eb836',
    'success-color-active': '#449e1c',
    'success-color-disable': '#2e6a13',
    'alarm-color': '#faad14',
    'alarm-color-hover': '#e1a631',
    'alarm-color-active': '#c78c17',
    'alarm-color-disable': '#865e10',
    'error-color': '#ff4d4f',
    'error-color-hover': '#e65c5f',
    'error-color-active': '#cc4245',
    'error-color-disable': '#892c2e',
    'warning-color': '#fadb14',
    'warning-color-hover': '#e1ca31',
    'warning-color-active': '#c8b017',
    'warning-color-disable': '#867610',
    'info-color': '#8b909f',
    'info-color-hover': '#8b909f',
    'info-color-active': '#717684',
    'info-color-disable': '#4c4f58',
    // 文字
    'title-color': '#ffffffd9', // 标题文字
    'text-color': '#ffffffa6', // 正文
    'text-color-secondary': '#ffffff73', // 次级文字
    'disabled-color': '#ffffff40', // 禁用型文字
    // 边框
    'border-color-base': '#ffffff40', // 边框1
    'border-color-split': '#ffffff33', // 边框2
    'border-color-tip': '#ffffff1f', // 边框3
    'border-color-disable': '#ffffff14', // 边框4

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
    'slider-rail-background-color-hover': '@border-color-base',
    'slider-track-background-color': '@primary-color',
    'slider-track-background-color-hover': '@primary-color',
    'tree-node-selected-bg': '@primary-color',

    'tooltip-color': '@text-color'
}

export const themeTransparent = true