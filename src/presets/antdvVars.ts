import { ThemeOptions } from "../type";

const antdvDefaultVars:ThemeOptions['antdvVars'] = {
  'primary-color':'var(--primary-color)',
  'primary-color-hover':'var(--primary-color-hover)',
  'primary-color-active':'var(--primary-color-active)',
  'primary-color-outline':'var(--transparent-color)',
  'success-color':'var(--success-color)',
  'success-color-hover':'var(--success-color-hover)',
  'success-color-active':'var(--success-color-active)',
  'success-color-outline':'var(--transparent-color)',
  'alarm-color':'var(--alarm-color)',
  'alarm-color-hover':'var(--alarm-color-hover)',
  'alarm-color-active':'var(--alarm-color-active)',
  'alarm-color-outline':'var(--transparent-color)',
  'error-color':'var(--error-color)',
  'error-color-hover':'var(--error-color-hover)',
  'error-color-active':'var(--error-color-active)',
  'error-color-outline':'var(--transparent-color)',
  'warning-color':'var(--warning-color)',
  'warning-color-hover':'var(--warning-color-hover)',
  'warning-color-active':'var(--warning-color-active)',
  'warning-color-outline':'var(--transparent-color)',
  'info-color':'var(--info-color)',
  'info-color-hover':'var(--info-color-hover)',
  'info-color-active':'var(--info-color-active)',
  'info-color-outline':'var(--transparent-color-active)',
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

  'tooltip-color': 'var(--text-color)',
  'tooltip-bg': 'var(--background-color-light)'
}

export default antdvDefaultVars