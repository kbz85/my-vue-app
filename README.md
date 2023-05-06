两种方法：
一、通过 glup 编译公共配置并使用
    步骤：
        1：获取并生成对应的 css 变量，将对应的变量存放并生成对应文件
        ``` genCssVarFile({
                'white-color': '#ffffff',
                'primary-color': '#1890ff',
            })
            genLess: 
                @white-color: #ffffff
                @primary-color: #1890ff
            genScss:
                $white-color: #ffffff
                $primary-color: #1890ff
        ```
        2：编译 less、scss
            antd.less
                @import 'ant-design-vue/dist/antd.less';
                @import 'genLess.less'
            vxe-table.scss
                @import 'genScss.scss'
                @import '../../node_modules/vxe-table/styles/index.scss';
            glup编译生成css
        3：编译 ts
        4：生成npm包
        5：引入，并使用`genCssVarFile`对应的themeList即可
    难点：
        怎么生成对应的 css 变量、在该 npm 包生成对应文件
        编译 ts
二：项目引入该 npm 包，并手动步骤配置
    步骤：
        1：引入 npm 包
        2：手动一下配置
            ```js
                1. 根目录下创建 project.config.ts
                2. 在 main.ts 中引入`import { initTheme } from './styles/index'`并初始化 initTheme() 3. 在 vite.congfig.ts 中添加：

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
                4. tailwind.config.js 中的`presets`引入：
                ```js
                    presets: [
                        require('./src/styles/theme/tailwind-preset-default')
                    ],
                ```
            ```