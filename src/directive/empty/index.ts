import path from "path";
import fs from "fs";
import { loadEnv } from "vite";

/**
 * @description:
 * @return {*}
 */
export default function emptyPlugin(data: { url: string }) {
  let emptyAssets: string[] = [];
  return {
    name: "empty-plugin",
    config: async (_) => {
      const cwd = process.cwd();
      const emptyUrl = path.join(cwd, data.url);
      // 读取指定目录下的文件
      fs.readdir(emptyUrl, (err, files) => {
        if (err) {
          console.error("Error reading directory:", err);
          return;
        }
        emptyAssets = files.map((file) => {
          const fileName = file.split(".")[0];
          return `.empty-${fileName} { background-image: url("${
            data.url + file
          }"); }`;
        });

        emptyAssets.push(
          ".empty-center { width: 100%; height: 100%; background-position: center, center; background-repeat: no-repeat }"
        );
      });
    },
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "style",
            attrs: {
              dataType: "empty",
            },
            children: emptyAssets.join("\n"),
            injectTo: "head",
          },
        ],
      };
    },
  };
}
