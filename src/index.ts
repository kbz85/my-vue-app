/*
 * @Author: kbz85 248997917@qq.com
 * @Date: 2023-05-25 10:14:21
 * @LastEditors: kbz85 248997917@qq.com
 * @LastEditTime: 2023-06-02 10:42:39
 * @FilePath: \my-vue-app\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from "path";
import fs from "fs";
import { createRequire } from "node:module";
import { promisify } from "node:util";
import { ThemeOptions } from "./type";
import antdvDefaultVars from "./presets/antdvVars";
import vxeTableDefaultVars from "./presets/vxeTableVars";
import { Plugin, Rollup, loadEnv } from "vite";
import { getVarColor } from "./util";
import { parse,HTMLElement } from 'node-html-parser';
interface NodeModuleWithCompile extends NodeModule {
  _compile(code: string, filename: string): any;
}
enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}
const _require = createRequire(import.meta.url);
const promisifiedRealpath = promisify(fs.realpath);
// load config
async function loadConfigFromBundledFile(
  fileName: string,
  bundledCode: string
): Promise<any> {
  const extension = path.extname(fileName);

  const realFileName = await promisifiedRealpath(fileName);
  const loaderExt = extension in _require.extensions ? extension : ".js";
  const defaultLoader = _require.extensions[loaderExt]!;
  _require.extensions[loaderExt] = (module: NodeModule, filename: string) => {
    if (filename === realFileName) {
      (module as NodeModuleWithCompile)._compile(bundledCode, filename);
    } else {
      defaultLoader(module, filename);
    }
  };
  // clear cache in case of server restart
  delete _require.cache[_require.resolve(fileName)];
  const raw = _require(fileName);
  _require.extensions[loaderExt] = defaultLoader;
  return raw.__esModule ? raw.default : raw;
}
export default function ThemePlugin(options?:ThemeOptions):Plugin{
  let themeConfig:Record<string,any> = {}
  return {
    name: "vite-theme-plugin",
    config: async (_, env) => {
      const cwd = process.cwd();
      const localEnv = loadEnv(env.mode, cwd);
      const VITE_APP_THEME = (localEnv.VITE_APP_THEME ||
        ThemeType.LIGHT) as ThemeType;
      const themeConfigPath = path.resolve(cwd, "project.config.ts");
      const rollup = (await import("rollup")) as typeof Rollup;

      const supportedExts = [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"];
      // use node-resolve to support .ts files
      const nodeResolve = await (
        await import("@rollup/plugin-node-resolve")
      ).nodeResolve({
        extensions: supportedExts,
      });

      //compile config file
      const bundle = await rollup.rollup({
        external: (id: string) =>
          (id[0] !== "." && !path.isAbsolute(id)) ||
          id.slice(-5, id.length) === ".json",
        input: themeConfigPath,
        treeshake: false,
        plugins: [nodeResolve],
      });

      const {
        output: [{ code }],
      } = await bundle.generate({
        exports: "named",
        format: "cjs",
      });

      const themeConfigs = await loadConfigFromBundledFile(
        themeConfigPath,
        code
      );
      themeConfig = themeConfigs[`${VITE_APP_THEME.toString()}Theme`] || {};
      const { antdvVars = {}, vxeTableVars = {} } = options || {};
      //vxe-table变量
      const additionalData = Object.entries(Object.assign({
        ...vxeTableDefaultVars
      },vxeTableVars)).map(([key,value]) => `${key}:${value}`).join(';') + ';'
      //antdv变量
      const modifyVars = Object.assign(
        {
          ...antdvDefaultVars,
          "table-border-color": "#000",
        },
        antdvVars
      );
      return {
        css: {
          preprocessorOptions: {
            less: {
              javascriptEnabled: true,
              modifyVars: modifyVars,
            },
            scss: {
              additionalData,
            },
          },
        },
      };
    },
    handleHotUpdate({ file, server }) {
      if (file.includes("project.config")) {
        server.ws.send({
          type: "custom",
          event: "special-update",
          data: {},
        });
        server.restart();
        return [];
      }
    },
    transformIndexHtml(html) {
      // 向body中添加样式变量
      let styleStr = Object.entries(themeConfig).map(([key,value]) => getVarColor(key, value)).join(';')
      const rootNode = parse(html)
      rootNode.childNodes.forEach(node =>{
        if(node instanceof HTMLElement && node.rawTagName === 'html'){
          node.setAttribute('style',styleStr)
        }
      })
      const newHtml = rootNode.innerHTML

      return {
        html:newHtml,
        tags: [],
      };
    },
  };
}
