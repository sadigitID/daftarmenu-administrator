import { CardDoughnut } from '@/components/card';
import { defferenceInDays } from '@/utils/date';
import { onMounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
onMounted(() => {
    var currentDay = new Date();
    var lastTimeStamp = 1717984603000;
    var date = new Date(lastTimeStamp);
    console.log('defferenceInDays', defferenceInDays(currentDay, date));
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-flex h-[835px] py-12 px-6 items-start gap-5 shrink-0 rounded-3xl") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CardDoughnut;
    ({}.CardDoughnut);
    __VLS_components.CardDoughnut;
    // @ts-ignore
    [CardDoughnut,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ title: ("Paket"), desc: ("Statistik Pembelian Paket Dipilih"), values: (([5, 10, 5])), labels: ((['1 Bulan', '3 Bulan', '12 Bulan'])), }));
    const __VLS_2 = __VLS_1({ title: ("Paket"), desc: ("Statistik Pembelian Paket Dipilih"), values: (([5, 10, 5])), labels: ((['1 Bulan', '3 Bulan', '12 Bulan'])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ title: ("Paket"), desc: ("Statistik Pembelian Paket Dipilih"), values: (([5, 10, 5])), labels: ((['1 Bulan', '3 Bulan', '12 Bulan'])), }));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['h-[835px]'];
        __VLS_styleScopedClasses['py-12'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['rounded-3xl'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                CardDoughnut: CardDoughnut,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Home.vue.js.map