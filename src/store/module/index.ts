/*
 * @Author: your name
 * @Date: 2021-07-13 17:16:28
 * @LastEditTime: 2021-07-13 17:26:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\store\module\index.ts
 */
const files = import.meta.glob("./*.ts");
let vuexConfig:any = {};

for(let key in files){
    let data = await files[key]();
    vuexConfig[key.replace(/\.\/([a-z]*)\.ts/,"$1")] = data.default;
}
console.log(vuexConfig)
export default vuexConfig;