/*
 * @Author: your name
 * @Date: 2021-07-13 09:39:43
 * @LastEditTime: 2021-07-13 09:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\router\modules\index.tsx
 */
import type {RouteRecordRaw} from 'vue-router';
let routes:Array<RouteRecordRaw> = [];
const files = import.meta.glob("./*.ts");

for(let key in files){
    let router = await files[key]();
    routes = routes.concat(router.default)
}
export default routes