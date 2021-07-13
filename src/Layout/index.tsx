/*
 * @Author: your name
 * @Date: 2021-07-12 18:38:32
 * @LastEditTime: 2021-07-13 14:58:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\Layout\index.tsx
 */
import { defineComponent,ref } from 'vue';
import { Layout, LayoutHeader, LayoutSider, LayoutContent } from "ant-design-vue"
import AppMian from "./AppMain"
import AsiderNav from './Asider';
import logo from "../assets/logo.png"
import "./index.less"
import Header from './Header';
export default defineComponent({
    name: "Layout",
    setup() {
        const collapsed = ref(false)
        return () => (
            <Layout>
                    <LayoutSider width="200" collapsed={collapsed.value} trigger={null} collapsible>
                        <div class="logo">
                            <img src={logo}/>
                            {!collapsed.value && <span>系统管理</span>}
                        </div>
                        <AsiderNav collapsed={collapsed.value}></AsiderNav>
                    </LayoutSider>
                <Layout>
                    <LayoutHeader>
                        <Header collapsed={collapsed.value} onCollapse={()=>{collapsed.value =!collapsed.value}}/>
                    </LayoutHeader>
                    <LayoutContent><AppMian /></LayoutContent>
                </Layout>
            </Layout>
        )
    }
})