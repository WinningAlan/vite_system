/*
 * @Author: your name
 * @Date: 2021-07-12 16:37:30
 * @LastEditTime: 2021-07-12 17:08:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\router\index.ts
 */
import {createRouter,RouteRecordRaw,createWebHistory} from 'vue-router';
const routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import("../pages/Home")
    },
    {
        path:'/about',
        name:'about',
        component:()=>import("../pages/About")
    },
    {
        path:'/login',
        name:'login',
        component:()=>import("../pages/Login")
    }
]
export default createRouter({
    history:createWebHistory(),
    routes
})
