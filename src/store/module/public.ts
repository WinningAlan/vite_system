/*
 * @Author: your name
 * @Date: 2021-07-13 17:16:44
 * @LastEditTime: 2021-07-13 17:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\store\module\public.ts
 */
interface stateType {
    user:any,
    token:string
}
const state:stateType =  {
    user:null,
    token:""
}
const getters =  {
   GET_USER({user}:stateType){
       return user
   }
}
const mutations = {
    SET_USER(state:stateType,data:any){
        state.user = data
    }
}
const actions =  {

}
export default { 
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

