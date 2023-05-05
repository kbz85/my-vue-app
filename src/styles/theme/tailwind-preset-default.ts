module.exports = {
    theme: {
        colors: {
            primary: 'rgb(var(--primary-color-tailwindcss) / <alpha-value>)',
            success: 'rgb(var(--success-color-tailwindcss) / <alpha-value>)',
            alarm: 'rgb(var(--alarm-color-tailwindcss) / <alpha-value>)',
            warning: 'rgb(var(--warning-color-tailwindcss) / <alpha-value>)',
            error: 'rgb(var(--error-color-tailwindcss) / <alpha-value>)',
            info: 'rgb(var(--info-color-tailwindcss) / <alpha-value>)',
            white: 'rgb(var(--white-color-tailwindcss) / <alpha-value>)',
        },
        extend: {
            textColor: {
                title: 'var(--title-color)',
                default: 'var(--text-color)',
                secondary: 'var(--text-color-secondary)',
                disabled: 'var(--disabled-color)',
            },
            borderColor: {
                default: 'var(--border-color-base)',
                split: 'var(--border-color-split)',
                tip: 'var(--boder-color-tip)',
                disable: 'var(border-color-disable)',
            },
            backgroundColor: {
                body: 'var(--bg-body)'
            }
        },
    }
}