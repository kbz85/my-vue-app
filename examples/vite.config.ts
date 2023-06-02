/*
 * @Author: kbz85 248997917@qq.com
 * @Date: 2023-05-25 10:14:21
 * @LastEditors: kbz85 248997917@qq.com
 * @LastEditTime: 2023-06-02 11:07:05
 * @FilePath: \my-vue-app\examples\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import ThemePlugin from "../src";
import emptyPlugin from "../src/directive/empty";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    // vite config
    plugins: [vue(), ThemePlugin(), emptyPlugin({
      url: '/assets/empty/'
    })],
    server: {
      host: true,
    },
  };
});
