/*
 * @Author: your name
 * @Date: 2021-07-12 17:14:12
 * @LastEditTime: 2021-07-12 17:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\plugin\SvgIcon\index.ts
 */
import {App,Plugin} from 'vue';
import SvgIcon from './SvgIcon';
const install = (app:App)=>{
    app.component(SvgIcon.name,SvgIcon)
}
SvgIcon.install = install;

export {
    SvgIcon
}
export default SvgIcon as unknown as Plugin 