/*
 * @Author: your name
 * @Date: 2021-07-12 18:38:32
 * @LastEditTime: 2021-07-12 18:49:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\Layout\index.tsx
 */
import { defineComponent } from 'vue';
import { Layout, LayoutHeader, LayoutSider, LayoutContent } from "ant-design-vue"
import AppMian from "./AppMain"
export default defineComponent({
    name: "Layout",
    setup() {
        return (
            <Layout>
                <Layout hasSider>
                    <LayoutSider style="width:200px">aside</LayoutSider>
                </Layout>
                <Layout>
                    <LayoutHeader>Header</LayoutHeader>
                    <LayoutContent><AppMian/></LayoutContent>
                </Layout>
            </Layout>
        )
    }
})