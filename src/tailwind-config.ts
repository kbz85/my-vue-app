
const config = {
    theme: {
        colors: {
            'primary': 'rgb(var(--primary-color-tailwindcss) / <alpha-value>)',
            'primary-base': 'rgb(var(--primary-color-tailwindcss) / <alpha-value>)',
            'primary-hover': 'rgb(var(--primary-color-hover-tailwindcss) / <alpha-value>)',
            'primary-active': 'rgb(var(--primary-color-active-tailwindcss) / <alpha-value>)',
            'primary-disabled': 'rgb(var(--primary-color-disabled-tailwindcss) / <alpha-value>)',
            'success': 'rgb(var(--success-color-tailwindcss) / <alpha-value>)',
            'success-base-': 'rgb(var(--success-color-tailwindcss) / <alpha-value>)',
            'success-hover': 'rgb(var(--success-color-hover-tailwindcss) / <alpha-value>)',
            'success-active': 'rgb(var(--success-color-active-tailwindcss) / <alpha-value>)',
            'success-disabled': 'rgb(var(--success-color-disabled-tailwindcss) / <alpha-value>)',
            'alarm': 'rgb(var(--alarm-color-tailwindcss) / <alpha-value>)',
            'alarm-base': 'rgb(var(--alarm-color-tailwindcss) / <alpha-value>)',
            'alarm-hover': 'rgb(var(--alarm-color-hover-tailwindcss) / <alpha-value>)',
            'alarm-active': 'rgb(var(--alarm-color-active-tailwindcss) / <alpha-value>)',
            'alarm-disabled': 'rgb(var(--alarm-color-disabled-tailwindcss) / <alpha-value>)',
            'warning': 'rgb(var(--warning-color-tailwindcss) / <alpha-value>)',
            'warning-base': 'rgb(var(--warning-color-tailwindcss) / <alpha-value>)',
            'warning-hover': 'rgb(var(--warning-color-hover-tailwindcss) / <alpha-value>)',
            'warning-active': 'rgb(var(--warning-color-active-tailwindcss) / <alpha-value>)',
            'warning-disabled': 'rgb(var(--warning-color-disabled-tailwindcss) / <alpha-value>)',
            'error': 'rgb(var(--error-color-tailwindcss) / <alpha-value>)',
            'error-base': 'rgb(var(--error-color-tailwindcss) / <alpha-value>)',
            'error-hover': 'rgb(var(--error-color-hover-tailwindcss) / <alpha-value>)',
            'error-active': 'rgb(var(--error-color-active-tailwindcss) / <alpha-value>)',
            'error-disabled': 'rgb(var(--error-color-disabled-tailwindcss) / <alpha-value>)',
            'info': 'rgb(var(--info-color-tailwindcss) / <alpha-value>)',
            'info-base': 'rgb(var(--info-color-tailwindcss) / <alpha-value>)',
            'info-hover': 'rgb(var(--info-color-hover-tailwindcss) / <alpha-value>)',
            'info-active': 'rgb(var(--info-color-active-tailwindcss) / <alpha-value>)',
            'info-disabled': 'rgb(var(--info-color-disabled-tailwindcss) / <alpha-value>)',
            'transparent': '#00000000',
            white: 'rgb(var(--white-color-tailwindcss) / <alpha-value>)'
        },
        extend: {
            textColor: {
                title: 'var(--text-title-color)',
                default: 'var(--text-color)',
                secondary: 'var(--text-secondary-color)',
                disabled: 'var(--text-disabled-color)',
            },
            borderColor: {
                default: 'var(--border-base-color)',
                light: 'var(--border-light-color)',
                lighter: 'var(--border-lighter-color)',
                'extra-light': 'var(--border-color-extra-light)',
            },
            backgroundColor: {
                body: 'var(--bg-body)', // 系统背景色
                popper: 'var(--tooltip-bg)', // 悬浮层
                modal: 'var(--modal-content-bg)',

                base: 'var(--border-base-color)',
                light: 'var(--border-light-color)',
                lighter: 'var(--border-lighter-color)',
                'extra-light': 'var(--border-color-extra-light)',
            },
            boxShadow: {
                low: '0 2px 8px #0000001f',
                middle: '0 4px 8px #00000029',
                high: '-4px 0 16px #00000029'
                // higher: '-4px 0 16px #00000029'
            }
        },
    }
}
export default config