/*
 * @Author: your name
 * @Date: 2021-07-12 15:49:01
 * @LastEditTime: 2021-07-13 10:01:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\App.tsx
 */
import {defineComponent} from "vue";
import {RouterView} from 'vue-router';
import "./App.less"
export default defineComponent({
    name:"App",
    setup(){
        return ()=>(
            <RouterView/>
        )
    }
})
