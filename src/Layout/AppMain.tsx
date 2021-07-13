/*
 * @Author: your name
 * @Date: 2021-07-12 18:38:52
 * @LastEditTime: 2021-07-13 09:59:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\Layout\AppMain.tsx
 */
import {defineComponent,h} from 'vue';
import {RouterView} from 'vue-router'
export default defineComponent({
    name:"AppMain",
    setup(){
        return ()=>(
            <RouterView/>
        )
    }
})