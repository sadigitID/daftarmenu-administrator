import { ChartDoughnut } from '@/components/charts';
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-[347px] p-6 items-center gap-4 rounded-2xl bg-white shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)] font-sans") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-start gap-8 flex-[1_0_0]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-1 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl font-medium") }, });
        (__VLS_ctx.title);
        // @ts-ignore
        [title,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-normal") }, });
        (__VLS_ctx.desc);
        // @ts-ignore
        [desc,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center gap-4 self-stretch") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .ChartDoughnut;
        ({}.ChartDoughnut);
        __VLS_components.ChartDoughnut;
        // @ts-ignore
        [ChartDoughnut,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ chartDataValues: ((__VLS_ctx.chartData)), chartLabels: ((__VLS_ctx.chartLabels)), }));
        const __VLS_2 = __VLS_1({ chartDataValues: ((__VLS_ctx.chartData)), chartLabels: ((__VLS_ctx.chartLabels)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ chartDataValues: ((__VLS_ctx.chartData)), chartLabels: ((__VLS_ctx.chartLabels)), }));
        // @ts-ignore
        [chartData, chartLabels,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['w-[347px]'];
            __VLS_styleScopedClasses['p-6'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-4'];
            __VLS_styleScopedClasses['rounded-2xl'];
            __VLS_styleScopedClasses['bg-white'];
            __VLS_styleScopedClasses['shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)]'];
            __VLS_styleScopedClasses['font-sans'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['flex-col'];
            __VLS_styleScopedClasses['justify-center'];
            __VLS_styleScopedClasses['items-start'];
            __VLS_styleScopedClasses['gap-8'];
            __VLS_styleScopedClasses['flex-[1_0_0]'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['flex-col'];
            __VLS_styleScopedClasses['items-start'];
            __VLS_styleScopedClasses['gap-1'];
            __VLS_styleScopedClasses['self-stretch'];
            __VLS_styleScopedClasses['text-xl'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-normal'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['justify-center'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-4'];
            __VLS_styleScopedClasses['self-stretch'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {
            ChartDoughnut
        };
        const __VLS_name = 'App';
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    ChartDoughnut: ChartDoughnut,
                };
            },
            name: 'App',
            components: {
                ChartDoughnut
            },
            props: {
                title: {
                    type: String,
                    required: true
                },
                desc: {
                    type: String,
                    required: true
                },
                values: {
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
                    title: this.title,
                    desc: this.desc,
                    chartData: this.values,
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
            ChartDoughnut
        },
        props: {
            title: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            },
            values: {
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
                title: this.title,
                desc: this.desc,
                chartData: this.values,
                chartLabels: this.labels
            };
        }
    });
})();
//# sourceMappingURL=CardDoughnut.vue.js.map