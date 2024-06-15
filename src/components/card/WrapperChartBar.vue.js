import { ChartBar } from '@/components/charts';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    let __VLS_functionalComponentProps;
    const __VLS_modelEmitsType = {};
    function __VLS_template() {
        let __VLS_ctx;
        /* Components */
        let __VLS_otherComponents;
        let __VLS_own;
        let __VLS_localComponents;
        let __VLS_components;
        let __VLS_styleScopedClasses;
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
        // @ts-ignore
        const __VLS_0 = {}
            .ChartBar;
        ({}.ChartBar);
        __VLS_components.ChartBar;
        // @ts-ignore
        [ChartBar,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ chartDataValues: ((__VLS_ctx.chartData)), chartLabels: ((__VLS_ctx.chartLabels)), }));
        const __VLS_2 = __VLS_1({ chartDataValues: ((__VLS_ctx.chartData)), chartLabels: ((__VLS_ctx.chartLabels)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ chartDataValues: ((__VLS_ctx.chartData)), chartLabels: ((__VLS_ctx.chartLabels)), }));
        // @ts-ignore
        [chartData, chartLabels,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {
            ChartBar
        };
        const __VLS_name = 'App';
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    ChartBar: ChartBar,
                };
            },
            name: 'App',
            components: {
                ChartBar
            },
            props: {
                data: {
                    type: Array,
                    required: true
                },
                labels: {
                    type: Array,
                    required: true
                }
            },
            data() {
                return {
                    chartData: this.data,
                    chartLabels: this.labels
                };
            }
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: 'App',
        components: {
            ChartBar
        },
        props: {
            data: {
                type: Array,
                required: true
            },
            labels: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                chartData: this.data,
                chartLabels: this.labels
            };
        }
    });
})();
;
//# sourceMappingURL=WrapperChartBar.vue.js.map