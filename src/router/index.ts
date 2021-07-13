/*
 * @Author: your name
 * @Date: 2021-07-12 16:37:30
 * @LastEditTime: 2021-07-13 09:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\router\index.ts
 */
import {createRouter,createWebHistory} from 'vue-router';
import routes from './modules';
console.log(routes)
export default createRouter({
    history:createWebHistory(),
    routes
})
