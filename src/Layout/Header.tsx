/*
 * @Author: your name
 * @Date: 2021-07-13 14:00:47
 * @LastEditTime: 2021-07-13 15:04:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\Layout\Header.tsx
 */
import { defineComponent, toRefs } from 'vue';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons-vue';
import type { PropType } from "vue"
import "./Header.less"
export default defineComponent({
    name: "Header",
    emits: ['update:collapsed'],
    props: {
        collapsed: {
            type:Boolean as PropType<boolean>,
            default:true
        },
        onCollapse:Function as PropType<()=>void>
    },
    setup(props) {
        return () => (
            <div class="layout_header">
                <div class="left">
                    {props.collapsed ?<MenuUnfoldOutlined class="show" onClick={props.onCollapse}/>:<MenuFoldOutlined class="close" onClick={props.onCollapse}/>}
                </div>
                <div class="right"></div>
            </div>
        )
    }
})