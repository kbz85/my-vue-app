1. 根目录下创建 project.config.ts
2. 在 main.ts 中引入`import { initTheme } from './styles/index'`并初始化 initTheme()
3. 在 vite.congfig.ts 中添加：
```js
css: {
    preprocessorOptions: {
        less: {
            javascriptEnabled: true,
            modifyVars: Object.assign({}, themeList)
        }
    }
}
```
