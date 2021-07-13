/*
 * @Author: your name
 * @Date: 2021-07-13 11:29:03
 * @LastEditTime: 2021-07-13 13:02:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\module\routerList.ts
 */
export interface RouterData {
    name: string,
    title: string,
    icon: string,
    children?: Array<RouterData>,
    path: string,
}

const routerList: Array<RouterData> = [
    {
        name: "dashboard",
        title: "dashboard",
        icon: "add",
        path: "/dashboard",
        children: [{
            name: "analysis",
            title: '分析页',
            icon: 'add',
            path: "/dashboard/analysis"
        },
        {
            name: "work",
            title: '工作页',
            icon: 'add',
            path: "/dashboard/work"
        }
        ]
    },
    {
        name: "user",
        title: "用户管理",
        icon: "add",
        path: "/user",
        children: [{
            name: "userTable",
            title: '用户列表',
            icon: 'add',
            path: "/user/userTable"
        }
        ]
    }
]
export default routerList
