/*
 * @Author: your name
 * @Date: 2021-07-12 17:48:33
 * @LastEditTime: 2021-07-12 18:18:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite_system\src\plugin\VueHighCharts\VueHighCharts.tsx
 */
import { defineComponent, h, ref, onMounted, watch, onUnmounted } from "vue";
import * as highcharts from "highcharts";
import type { Chart, Options } from "highcharts"
import type { PropType } from 'vue'
export default defineComponent({
    name: "VueHighCharts",
    props: {
        type: {
            type: String as PropType<string>,
            default: "chart"
        },
        options: {
            type: Object as PropType<Options>,
            requterd: true
        }
    },
    setup({ type, options }) {
        const chartRef = ref<HTMLDivElement | null>(null);
        const chart = ref<Chart | null>(null);
        onMounted(() => {
            chart.value = (highcharts as unknown as any)[type](chartRef.value, options)
        })
        watch(options as Options, (newValue) => {
            if (newValue) {
                chart.value?.update(newValue)
            }
        }, { deep: true })
        onUnmounted(() => {
            chart.value?.destroy()
        })
        return {
            chartRef
        }
    },
    render() {
     return  h("div", {
            class: "vue-high-charts",
            ref: 'chartRef'
        })
    }
})