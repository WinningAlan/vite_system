/*
 * @Author: your name
 * @Date: 2021-07-13 15:09:24
 * @LastEditTime: 2021-07-13 15:35:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\api\public.ts
 */
import $ from "../utils/request";
import {LoginParams} from "./typePublic.d"
//患者登录
export const Login = (params:LoginParams)=>{ console.log(params); return $.post('/api/v1/Account/Login',params)}