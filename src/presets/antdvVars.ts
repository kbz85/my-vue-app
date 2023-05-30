import { ThemeOptions } from "../type";

const antdvDefaultVars:ThemeOptions['antdvVars'] = {
  'primary-color':'var(--primary-color)',
  'success-color':'var(--success-color)',
  'alarm-color':'var(--alarm-color)',
  'error-color':'var(--error-color)',
  'warning-color':'var(--warning-color)',
  'info-color':'var(--info-color)',
  'modal-header-bg':'var(--model-bg)',
  'modal-content-bg': 'var(--model-bg)',
  'modal-footer-bg': 'var(--model-bg)',
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

  'component-background': 'var(--background-color-light)',
  'background-color-base': 'var(--background-color-light)',
  'item-hover-bg': 'var(--background-color-light)',
  // 单个组件样式覆盖
  'checkbox-check-bg': 'var(--background-color-light)',
  'alert-message-color': 'var(--white-color)',
  'heading-color': 'var(--text-color)',
  'divider-color': 'var(--border-color-split)',
  'select-item-selected-bg': 'var(--primary-color)',
  // 'picker-basic-cell-hover-with-range-color': 'fade(var(--primary-color), 20)',
  // 'picker-basic-cell-active-with-range-color': 'fade(var(--primary-color), 20)',
  'slider-dot-border-color-active': 'var(--primary-color)',
  'slider-track-color-active': 'var(--primary-color)',
  'slider-rail-background-color-hover': 'var(--border-color-base)',
  'slider-track-background-color': 'var(--primary-color)',
  'slider-track-background-color-hover': 'var(--primary-color)',
  'tree-node-selected-bg': 'var(--primary-color)',

  'tooltip-color': 'var(--text-color)'
}

export default antdvDefaultVars