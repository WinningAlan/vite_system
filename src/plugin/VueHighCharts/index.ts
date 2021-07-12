/*
 * @Author: your name
 * @Date: 2021-07-12 17:48:16
 * @LastEditTime: 2021-07-12 18:10:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\plugin\VueHighCharts\index.ts
 */
import type {App,Plugin} from 'vue';
import VueHighCharts from './VueHighCharts';
const install  = (app:App)=>{
    app.component(VueHighCharts.name,VueHighCharts)
}
VueHighCharts.install  = install;

export {
    VueHighCharts 
}
export default (VueHighCharts as unknown as Plugin);