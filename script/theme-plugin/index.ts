import {Plugin, Rollup, loadEnv} from 'vite';
import { generateVxeStyle, parseHexColor } from './util';
import path from 'path';
import fs from 'fs';
import { createRequire } from 'node:module'
import { promisify } from 'node:util' 
interface NodeModuleWithCompile extends NodeModule {
  _compile(code: string, filename: string): any
}
enum ThemeType{
  LIGHT = 'light',
  DARK = 'dark'
}

const _require = createRequire(import.meta.url)
const promisifiedRealpath = promisify(fs.realpath)
// load config
async function loadConfigFromBundledFile(
  fileName: string,
  bundledCode: string
): Promise<any> {
  const extension = path.extname(fileName)

  const realFileName = await promisifiedRealpath(fileName)
  const loaderExt = extension in _require.extensions ? extension : '.js'
  const defaultLoader = _require.extensions[loaderExt]!
  _require.extensions[loaderExt] = (module: NodeModule, filename: string) => {
    if (filename === realFileName) {
      ;(module as NodeModuleWithCompile)._compile(bundledCode, filename)
    } else {
      defaultLoader(module, filename)
    }
  }
  // clear cache in case of server restart
  delete _require.cache[_require.resolve(fileName)]
  const raw = _require(fileName)
  _require.extensions[loaderExt] = defaultLoader
  return raw.__esModule ? raw.default : raw
}
export default function ThemePlugin():Plugin{
  let themeConfig = null
  return {
    name:'vite-theme-plugin',
    config:async (config,env) => {
      const cwd = process.cwd()
      const localEnv = loadEnv(env.mode, cwd)
      const VITE_APP_THEME = (localEnv.VITE_APP_THEME || ThemeType.LIGHT) as ThemeType
      const themeConfigPath = path.resolve(cwd, 'project.config.ts')
      const rollup =  await import('rollup') as typeof Rollup

      const supportedExts = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
      // use node-resolve to support .ts files
      const nodeResolve = await (await import('@rollup/plugin-node-resolve')).nodeResolve({
        extensions: supportedExts
      })

      //compile config file
      const bundle = await rollup.rollup({
        external: (id: string) =>
          (id[0] !== '.' && !path.isAbsolute(id)) ||
          id.slice(-5, id.length) === '.json',
        input: themeConfigPath,
        treeshake: false,
        plugins: [nodeResolve]
      })

      const {
        output: [{ code }]
      } = await bundle.generate({
        exports: 'named',
        format: 'cjs'
      })

      const themeConfigs = await loadConfigFromBundledFile(themeConfigPath, code)
      const currentThemeConfig = themeConfigs[`${VITE_APP_THEME.toString()}Theme`] || {}
      themeConfig = currentThemeConfig
      const keys = Object.keys(currentThemeConfig)
      const vars = Object.fromEntries(keys.map(key => {
        if(key==='text-color-secondary'){
          return [key,`#ffffff`]
        }
        if(key==='disabled-color'){
          return [key,`#ffffff`]
        }
        return [key,`var(--${key})`]
      }))
      console.log(vars)
      return {
        css: {
          preprocessorOptions: {
            less: {
              javascriptEnabled: true,
              modifyVars: {
                ...vars,
                'table-border-color':'#000'
              }
            }
          }
        }
      }
    },
    handleHotUpdate({ file, server }) { 
      if (file.includes('project.config')) {
        server.ws.send({
          type: 'custom',
          event: 'special-update',
          data: {}
        })
        server.restart()
        return []
      }
    },
    transformIndexHtml(html){
      let rootColors = Object.keys(themeConfig).map(key => {
        const color = parseHexColor(themeConfig[key])
        const colorType = typeof color
        if (colorType === 'object') {
          return `--${key}: rgba(${color.r},${color.g},${color.b}, ${color.a});\n--${key}-tailwindcss: ${color.r} ${color.g} ${color.b};`
        } else {
          return ''
        }
      }).join("\n");
      rootColors += '--tw-text-opacity: 0.8;\n'
      rootColors += '--tw-bg-opacity: 0.8;'
      return {
        html,
        tags:[
          { 
            tag:'style',
            attrs:{theme:'root-theme'},
            children:`:root {
              ${rootColors}
            }`,
            injectTo:'head'
          }
        ]
      }
    }
  }
}