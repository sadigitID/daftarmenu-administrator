import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
export default (await import('vue')).defineComponent({
    name: 'ChartDoughnut',
    components: {
        Doughnut
    },
    props: {
        chartDataValues: {
            type: Array,
            required: true
        },
        chartLabels: {
            type: Array,
            required: true
        }
    },
    computed: {
        chartData() {
            return {
                labels: this.chartLabels,
                datasets: [
                    {
                        backgroundColor: ['#d3e8c8', '#70b44e', '#3e632b'],
                        data: this.chartDataValues
                    }
                ]
            };
        }
    },
    data() {
        return {
            chartOptions: {
                layout: {},
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 16,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                },
                //mantainAspectRatio: false,
                aspectRatio: 1.8,
                borderWidth: 5,
                borderColor: 'white',
                cutout: '62%'
            }
        };
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .Doughnut;
    ({}.Doughnut);
    __VLS_components.Doughnut;
    // @ts-ignore
    [Doughnut,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }));
    const __VLS_2 = __VLS_1({ data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }));
    // @ts-ignore
    [chartData, chartOptions,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Doughnut
    };
    const __VLS_name = 'ChartDoughnut';
    let __VLS_internalComponent;
}
//# sourceMappingURL=ChartDoughnut.vue.js.map