/*
 * @Author: your name
 * @Date: 2021-07-12 15:49:01
 * @LastEditTime: 2021-07-13 18:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\main.ts
 */
import { createApp } from 'vue'
import "vite-plugin-svg-icons/register"
import App from './App.tsx'
import router from "./router"
import store from "./store"
import SvgIcon from "./plugin/SvgIcon"
import VueHighCharts from "./plugin/VueHighCharts"
import "ant-design-vue/dist/antd.css";
router.beforeEach((to, from, next) => {
    if(to.path==="/login"){
        next()
    }else{
        if(store.getters["public/GET_USER"]){
            next()
        }else{
            next("/login")
        }
    }
})
const app = createApp(App);
app.use(router).use(store).use(SvgIcon).use(VueHighCharts).mount('#app')
