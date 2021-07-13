/*
 * @Author: your name
 * @Date: 2021-07-13 09:40:13
 * @LastEditTime: 2021-07-13 09:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\router\modules\dashboard.ts
 */
import {RouteRecordRaw} from 'vue-router'
import Layout from '../../Layout'
const routes:Array<RouteRecordRaw> = [
    {
        name:"dashboard",
        path:"/dashboard",
        component:Layout,
        redirect:"/dashboard/analysis",
        meta:{
            title:"dashboard",
            icon:"add"
        },
        children:[
            {
                name:"analysis",
                path:'/dashboard/analysis',
                component:()=>import('../../pages/dashboard/Analysis'),
                meta:{
                    title:"分析页",
                    icon:"add"
                },
            },
            {
                name:"work",
                path:'/dashboard/work',
                component:()=>import('../../pages/dashboard/Work'),
                meta:{
                    title:"工作页",
                    icon:"add"
                },
            },
        ]
    }
]
export default routes