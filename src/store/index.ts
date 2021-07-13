/*
 * @Author: your name
 * @Date: 2021-07-12 16:43:11
 * @LastEditTime: 2021-07-13 17:26:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\store\index.ts
 */
import { createStore} from "vuex";
import vuexConfig from "./module";
const stroe = createStore({
    modules:vuexConfig
})
export default stroe;