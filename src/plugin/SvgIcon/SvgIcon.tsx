/*
 * @Author: your name
 * @Date: 2021-07-12 17:14:32
 * @LastEditTime: 2021-07-12 17:27:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\plugin\SvgIcon\SvgIcon.tsx
 */
import {defineComponent} from "vue";
import type {PropType} from "vue"
import { computed } from "@vue/runtime-core";
import "./svgIcon.less"
export default defineComponent({
    name:"SvgIcon",
    props:{
      iconClass:{
          type:String as PropType<string>,
          required:true
      },
      className:{
          type:String as PropType<string>,
          default:""
      }
    },
    setup(props){
       const svgClass = computed(()=>{
           if(props.className){
               return `svg-icon ${props.className}`
           }else{
               return "svg-icon"
           }
       })
       const iconName = computed(()=>`#icon-${props.iconClass}`)
       return ()=>(
           <svg  class={svgClass.value} aria-hidden="true">
               <use xlinkHref={iconName.value}></use>
           </svg>
       )
    },
})