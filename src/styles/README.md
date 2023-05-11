1. 根目录下创建 project.config.ts

2. 在 main.ts 中引入`import { initTheme } from './styles/index'`并初始化 initTheme(themeList) // 创建cssvar变量

3. 在 vite.congfig.ts 中添加：
```js
import { lightThemeList, darkThemeList } from './project.config'
import { generateVxeStyle } from './src/styles/theme/color'

css: {
    preprocessorOptions: {
        // ant主题更改，适合使用less插件的
        less: {
            javascriptEnabled: true,
            modifyVars: env.VITE_APP_THEME === 'light' ? lightThemeList : darkThemeList
        },
        // vxe-table主题更改，适合使用scss插件的
        scss: {
          additionalData: generateVxeStyle(env.VITE_APP_THEME === 'light' ? lightThemeList : darkThemeList, {})
        }
    }
}
```

4. tailwind.config.js 中的`presets`引入：

```js
presets: [
    require('./src/styles/theme/tailwind-preset-default')
  ],
```

