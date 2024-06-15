import { ChevronRight } from '@/components/icons';
import { useRestoStore } from '@/stores/resto';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const resto = useRestoStore();
const __VLS_props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
const onSelected = (data) => {
    resto.resto = data;
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        data: {
            type: Object,
            required: true
        }
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.onSelected(__VLS_ctx.data);
                // @ts-ignore
                [onSelected, data,];
            } }, ...{ class: ("flex flex-1 p-2 bg-white justify-between items-center rounded-2xl font-sans shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.data.resto.resto_image)), ...{ class: ("object-cover object-center w-[68px] h-[68px] rounded-lg") }, alt: ("Resto Profile Picture"), });
    // @ts-ignore
    [data,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-start gap-1.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-start gap-0.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-0.5") }, });
    if (__VLS_ctx.data.account.account_subscription_id == 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-start gap-2.5 rounded-full bg-primary-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-primary-800") }, });
        // @ts-ignore
        [data,];
    }
    else if (__VLS_ctx.data.account.account_subscription_id == 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-start gap-2.5 rounded-full bg-primary-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-primary-800") }, });
        // @ts-ignore
        [data,];
    }
    else if (__VLS_ctx.data.account.account_subscription_id > 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-start bg-gradient-to-r from-[#E3FFD3] to-[#FFF59C] rounded-full space-x-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-primary-900") }, });
        // @ts-ignore
        [data,];
    }
    if (__VLS_ctx.data.account.account_subscription == true) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-center gap-2.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-superorange") }, });
        // @ts-ignore
        [data,];
    }
    else if (__VLS_ctx.data.account.account_subscription == false) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-center gap-2.5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-red-500") }, });
        // @ts-ignore
        [data,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold text-dark") }, });
    (__VLS_ctx.data.resto.resto_name);
    // @ts-ignore
    [data,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-700") }, });
    (__VLS_ctx.data.account.account_subscription_expired);
    // @ts-ignore
    [data,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .ChevronRight;
    ({}.ChevronRight);
    __VLS_components.ChevronRight;
    // @ts-ignore
    [ChevronRight,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-6 h-6 fill-dark") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-6 h-6 fill-dark") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("w-6 h-6 fill-dark") }, }));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['shadow-[1px_1px_8px_0px_rgba(180,180,180,0.39)]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-[68px]'];
        __VLS_styleScopedClasses['h-[68px]'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-1.5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-0.5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-0.5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-2.5'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-2.5'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['bg-gradient-to-r'];
        __VLS_styleScopedClasses['from-[#E3FFD3]'];
        __VLS_styleScopedClasses['to-[#FFF59C]'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['space-x-1'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2.5'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-superorange'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2.5'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-red-500'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['w-6'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['fill-dark'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ChevronRight: ChevronRight,
                onSelected: onSelected,
            };
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
});
;
//# sourceMappingURL=CardResto.vue.js.map