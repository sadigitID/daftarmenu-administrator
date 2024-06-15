import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);
export default (await import('vue')).defineComponent({
    name: 'ChartBar',
    components: {
        Bar
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
                        label: '',
                        data: this.chartDataValues,
                        backgroundColor: '#d3e8c8',
                        hoverBackgroundColor: '#70b44e',
                        borderRadius: 6,
                        borderWidth: 2,
                        borderColor: '#d3e8c8',
                        hoverBorderColor: '#70b44e',
                        maxBarThickness: 25,
                    }
                ]
            };
        }
    },
    data() {
        return {
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 0
                        }
                    }
                }
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
        .Bar;
    ({}.Bar);
    __VLS_components.Bar;
    // @ts-ignore
    [Bar,];
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
        Bar
    };
    const __VLS_name = 'ChartBar';
    let __VLS_internalComponent;
}
//# sourceMappingURL=ChartBar.vue.js.map