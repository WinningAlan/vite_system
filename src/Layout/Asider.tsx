/*
 * @Author: your name
 * @Date: 2021-07-13 10:02:27
 * @LastEditTime: 2021-07-13 14:56:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\Layout\Asider.tsx
 */
import { computed, defineComponent, h, PropType, reactive, ref } from "vue";
import { Menu, MenuItem, SubMenu } from "ant-design-vue";
import routerList, { RouterData } from "../module/routerList";
import { SvgIcon } from "../plugin/SvgIcon";
import { RouterLink,useRoute} from 'vue-router'
import "./Asider.less"
export default defineComponent({
    name: "Asider",
    props: {
        collapsed: {
            type: Boolean as PropType<boolean>,
            required: true
        }
    },
    setup(props) {
        const navData = ref<RouterData[]>(routerList);
        const navShow = (data: RouterData[]): JSX.Element[] => {
            return data.map((item: RouterData) => {
                if (item.children && item.children.length > 0) {
                    return (
                        <SubMenu title={item.title} icon={<SvgIcon iconClass={item.icon} style={{ fontSize: '20px' }} />} key={item.path}>
                            {navShow(item.children)}
                        </SubMenu>
                    )
                } else {
                    return (
                        <RouterLink to={item.path} key={item.path} activeClass="activeNav">
                            <MenuItem title={item.title} icon={<SvgIcon iconClass={item.icon} style={{ fontSize: '20px' }} />} key={item.path}>
                                <span title={item.title}>{item.title}</span>
                            </MenuItem>
                        </RouterLink>
                    )
                }
            })
        }
        const route = useRoute();
        const selectedKeys = computed(()=>[route.path])
        const openKeys = computed(()=>[route.matched[0].path]) 
        return () => (
            <Menu
                mode="inline"
                inlineCollapsed={props.collapsed}
                selectedKeys={selectedKeys.value}
                openKeys={openKeys.value}
            >
                {navShow(navData.value)}
            </Menu>
        )
    }
})