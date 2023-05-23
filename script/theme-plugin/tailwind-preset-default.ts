module.exports = {
    theme: {
        colors: {
            'primary-color': 'rgb(var(--primary-color-tailwindcss) / <alpha-value>)',
            'primary-color-hover': 'rgb(var(--primary-color-hover-tailwindcss) / <alpha-value>)',
            'primary-color-active': 'rgb(var(--primary-color-active-tailwindcss) / <alpha-value>)',
            'primary-color-disable': 'rgb(var(--primary-color-disable-tailwindcss) / <alpha-value>)',
            'success-color': 'rgb(var(--success-color-tailwindcss) / <alpha-value>)',
            'success-color-hover': 'rgb(var(--success-color-hover-tailwindcss) / <alpha-value>)',
            'success-color-active': 'rgb(var(--success-color-active-tailwindcss) / <alpha-value>)',
            'success-color-disable': 'rgb(var(--success-color-disable-tailwindcss) / <alpha-value>)',
            'alarm-color': 'rgb(var(--alarm-color-tailwindcss) / <alpha-value>)',
            'alarm-color-hover': 'rgb(var(--alarm-color-hover-tailwindcss) / <alpha-value>)',
            'alarm-color-active': 'rgb(var(--alarm-color-active-tailwindcss) / <alpha-value>)',
            'alarm-color-disable': 'rgb(var(--alarm-color-disable-tailwindcss) / <alpha-value>)',
            'warning-color': 'rgb(var(--warning-color-tailwindcss) / <alpha-value>)',
            'warning-color-hover': 'rgb(var(--warning-color-hover-tailwindcss) / <alpha-value>)',
            'warning-color-active': 'rgb(var(--warning-color-active-tailwindcss) / <alpha-value>)',
            'warning-color-disable': 'rgb(var(--warning-color-disable-tailwindcss) / <alpha-value>)',
            'error-color': 'rgb(var(--error-color-tailwindcss) / <alpha-value>)',
            'error-color-hover': 'rgb(var(--error-color-hover-tailwindcss) / <alpha-value>)',
            'error-color-active': 'rgb(var(--error-color-active-tailwindcss) / <alpha-value>)',
            'error-color-disable': 'rgb(var(--error-color-disable-tailwindcss) / <alpha-value>)',
            'info-color': 'rgb(var(--info-color-tailwindcss) / <alpha-value>)',
            'info-color-hover': 'rgb(var(--info-color-hover-tailwindcss) / <alpha-value>)',
            'info-color-active': 'rgb(var(--info-color-active-tailwindcss) / <alpha-value>)',
            'info-color-disable': 'rgb(var(--info-color-disable-tailwindcss) / <alpha-value>)',
            'transparent': '#00000000',
            white: 'rgb(var(--white-color-tailwindcss) / <alpha-value>)'
        },
        opacity: {
            'default': '0.8',
        },
        extend: {
            textColor: {
                title: 'var(--title-color)',
                default: 'var(--text-color)',
                secondary: 'var(--text-color-secondary)',
                disabled: 'var(--disabled-color)',
            },
            backgroundOpacity: {
                // '': '0.8',
            },
            textOpacity: {
                'default': '0.75',
                0: '0',
                5: '0.05',
                10: '0.1',
                20: '0.2',
                25: '0.25',
                30: '0.3',
                40: '0.4',
                50: '0.5',
                60: '0.6',
                70: '0.7',
                75: '0.75',
                80: '0.8',
                90: '0.9',
                95: '0.95',
                100: '0.8',
                // '': '0.8',
                // 100: '0.8'
            },
            opacity: {
                'default': '0.75',
                0: '0',
                5: '0.05',
                10: '0.1',
                20: '0.2',
                25: '0.25',
                30: '0.3',
                40: '0.4',
                50: '0.5',
                60: '0.6',
                70: '0.7',
                75: '0.75',
                80: '0.8',
                90: '0.9',
                95: '0.95',
                100: '0.8',
            },
            borderColor: {
                default: 'var(--border-color-base)',
                split: 'var(--border-color-split)',
                tip: 'var(--border-color-tip)',
                disable: 'var(--border-color-disable)',
            },
            backgroundColor: {
                body: 'var(--bg-body)'
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