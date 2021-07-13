/*
 * @Author: your name
 * @Date: 2021-07-13 09:40:37
 * @LastEditTime: 2021-07-13 18:16:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\router\modules\common.ts
 */
import {RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        redirect:'/dashboard'
    },
    {
        path:'/login',
        name:'login',
        component:()=>import("../../pages/Login.vue"),
        meta:{
            title:"登录",
            icon:"add"
        }
    }
]
export default routes