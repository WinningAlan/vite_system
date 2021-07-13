/*
 * @Author: your name
 * @Date: 2021-07-12 15:49:02
 * @LastEditTime: 2021-07-13 09:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteImp from "vite-plugin-imp"
import vueJsx from "@vitejs/plugin-vue-jsx"
import {resolve} from 'path'
import svgIcon from "vite-plugin-svg-icons"
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  //   viteImp({
  //   libList:[
  //     {
  //       libName:"ant-design-vue",
  //       style:(name)=>`ant-design-vue/es/${name}/style/index.css`
  //     }
  //   ]
  // }),
  svgIcon({
    iconDirs:[resolve(process.cwd(),"./src/icons")],
    symbolId:"icon-[dir]-[name]",
  })
]
})
