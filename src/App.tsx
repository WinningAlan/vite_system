/*
 * @Author: your name
 * @Date: 2021-07-12 15:49:01
 * @LastEditTime: 2021-07-12 17:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\App.tsx
 */
import {defineComponent} from "vue";
import {RouterView} from 'vue-router'
export default defineComponent({
    name:"App",
    setup(){
        return ()=>(
            <RouterView/>
        )
    }
})
