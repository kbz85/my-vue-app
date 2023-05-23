1. 根目录下创建 project.config.ts
```js
// 根据在env环境下命名的VITE_APP_THEME创建变量, 如：bigData
import { lightTheme, darkTheme } from './script/theme-plugin/theme/theme-default'
import { Theme } from './script/theme-plugin/theme/theme-type'
export const bigDataTheme:Theme = Object.assign({}, 
  // 如果为黑暗模式，只需要调整个别参数，则可采用assign,快速生成主题
darkTheme, 
{
  // 此处可覆盖原来的变量及添加新变量
  ...
})
```

2. vite.config.js下添加插件
```js
plugins: [
  ...,
  ThemePlugin()
]
```

3. main引入样式
```js
  import 'vxe-table/lib/style.css'
  import 'ant-design-vue/dist/antd.less'
  import '../script/theme-plugin/styles/index.css';
  import '../script/theme-plugin/styles/antd.less';
  import '../script/theme-plugin/styles/vxe-table.scss';
```