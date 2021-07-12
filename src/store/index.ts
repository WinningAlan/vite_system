/*
 * @Author: your name
 * @Date: 2021-07-12 16:43:11
 * @LastEditTime: 2021-07-12 17:08:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\store\index.ts
 */
import { createStore, Store } from "vuex";
interface StateType {
    isLogin: boolean
}
const stroe: Store<StateType> = createStore({
    state: {
        isLogin: true
    },
    getters: {
        GET_ISLOGIN({ isLogin }) {
            return isLogin
        },
    },
    mutations: {
        SET_ISLOGIN(state,data){
            state.isLogin = data
        }
    },
    actions: {

    }
})
export default stroe;