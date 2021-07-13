/*
 * @Author: your name
 * @Date: 2021-07-13 09:40:22
 * @LastEditTime: 2021-07-13 09:54:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\router\modules\user.ts
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '../../Layout'
const routes: Array<RouteRecordRaw> = [
    {
        name: "user",
        path: "/user",
        component: Layout,
        redirect: "/user/userTable",
        meta: {
            title: "用户管理",
            icon: "add"
        },
        children: [
            {
                name: "userTable",
                path: '/user/userTable',
                component: () => import('../../pages/user/UserTable'),
                meta: {
                    title: "用户列表",
                    icon: "add"
                },
            }
        ]
    }
]
export default routes