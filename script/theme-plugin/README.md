1. 根目录下创建 project.config.ts

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