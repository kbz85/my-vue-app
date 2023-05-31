import { ThemeOptions } from "../type";

const antdvDefaultVars:ThemeOptions['antdvVars'] = {
  'primary-color':'var(--primary-color)',
  'success-color':'var(--success-color)',
  'alarm-color':'var(--alarm-color)',
  'error-color':'var(--error-color)',
  'warning-color':'var(--warning-color)',
  'info-color':'var(--info-color)',
  'modal-header-bg':'var(--modal-bg)',
  'modal-content-bg': 'var(--modal-bg)',
  'modal-footer-bg': 'var(--modal-bg)',
  'text-color': 'var(--text-color)',
  
  'primary-1': 'var(--primary-color-active)',
  'primary-2': 'var(--primary-color-active)',
  'primary-3': 'var(--primary-color-active)',
  'primary-4': 'var(--primary-color-active)',
  'primary-5': 'var(--primary-color-active)',
  'primary-6': 'var(--primary-color-active)',
  'primary-7': 'var(--primary-color-active)',
  'primary-8': 'var(--primary-color-active)',
  'primary-9': 'var(--primary-color-active)',
  'primary-10': 'var(--primary-color-active)',
  // 黑暗模式需要兼容样式

  'component-background': 'var(--module-bg)',
  'background-color-base': 'var(--module-bg)',
  'item-hover-bg': 'var(--module-bg)',
  // 单个组件样式覆盖
  'checkbox-check-bg': 'var(--module-bg)',
  'heading-color': 'var(--text-color)',
  'divider-color': 'var(--border-light-color)',
  'select-item-selected-bg': 'rgb(var(--primary-color-tailwindcss),0.1)',
  // 'picker-basic-cell-hover-with-range-color': 'fade(var(--primary-color), 20)',
  // 'picker-basic-cell-active-with-range-color': 'fade(var(--primary-color), 20)',
  'slider-dot-border-color-active': 'var(--primary-color)',
  'slider-track-color-active': 'var(--primary-color)',
  'slider-rail-background-color-hover': 'var(--border-base-color)',
  'slider-track-background-color': 'var(--primary-color)',
  'slider-track-background-color-hover': 'var(--primary-color)',
  'tree-node-selected-bg': 'var(--primary-color)',

  'tooltip-color': 'var(--text-color)',
  //alert组件
  'alert-message-color': 'var(--text-color)'
}

export default antdvDefaultVars