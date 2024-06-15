import { Vec } from "@/components/icons/";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    icon: Object,
    title: String,
    desc: String,
    value: String,
    title2: String,
    desc2: String,
    value2: String,
    type: {
        type: String,
        default: 'green'
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        icon: Object,
        title: String,
        desc: String,
        value: String,
        title2: String,
        desc2: String,
        value2: String,
        type: {
            type: String,
            default: 'green'
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
    if (__VLS_ctx.type === 'green') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-4 flex-col justify-center items-center gap-2 flex-1 bottom-0 self-stretch rounded-2xl bg-gray-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center gap-2") }, });
        const __VLS_0 = (__VLS_ctx.icon);
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("size-7 text-primary-800") }, }));
        const __VLS_2 = __VLS_1({ ...{ class: ("size-7 text-primary-800") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ class: ("size-7 text-primary-800") }, }));
        // @ts-ignore
        [type, icon,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-sm leading-[14.4px] text-primary-800") }, });
        (__VLS_ctx.title);
        // @ts-ignore
        [title,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex px-0 py-1 justify-center items-center self-stretch rounded-2xl bg-primary-800") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-xs leading-[14.4px] text-white") }, });
        (__VLS_ctx.desc);
        // @ts-ignore
        [desc,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-bold text-xl leading-6 text-white") }, });
        (__VLS_ctx.value);
        // @ts-ignore
        [value,];
        // @ts-ignore
        const __VLS_6 = {}
            .Vec;
        ({}.Vec);
        ({}.Vec);
        __VLS_components.Vec;
        __VLS_components.Vec;
        // @ts-ignore
        [Vec, Vec,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("self-stretch text-white stroke-2") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("self-stretch text-white stroke-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ class: ("self-stretch text-white stroke-2") }, }));
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-xs leading-[14.4px] text-white") }, });
        (__VLS_ctx.desc2);
        // @ts-ignore
        [desc2,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-bold text-xl leading-6 text-white") }, });
        (__VLS_ctx.value2);
        // @ts-ignore
        [value2,];
    }
    else if (__VLS_ctx.type === 'gray') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-4 flex-col justify-center items-center gap-2 flex-1 bottom-0 self-stretch rounded-2xl bg-primary-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center gap-2") }, });
        const __VLS_12 = (__VLS_ctx.icon);
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("size-7 text-primary-800") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("size-7 text-primary-800") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ class: ("size-7 text-primary-800") }, }));
        // @ts-ignore
        [type, icon,];
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-sm leading-[14.4px] text-primary-800") }, });
        (__VLS_ctx.title);
        // @ts-ignore
        [title,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex px-0 py-1 justify-center items-center self-stretch rounded-2xl bg-white") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-xs leading-[14.4px] text-primary-800") }, });
        (__VLS_ctx.desc);
        // @ts-ignore
        [desc,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-bold text-xl leading-6 text-primary-800") }, });
        (__VLS_ctx.value);
        // @ts-ignore
        [value,];
        // @ts-ignore
        const __VLS_18 = {}
            .Vec;
        ({}.Vec);
        ({}.Vec);
        __VLS_components.Vec;
        __VLS_components.Vec;
        // @ts-ignore
        [Vec, Vec,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("self-stretch text-primary-800 stroke-2") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("self-stretch text-primary-800 stroke-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ class: ("self-stretch text-primary-800 stroke-2") }, }));
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center gap-1 flex-1 bottom-0 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-xs leading-[14.4px] text-primary-800") }, });
        (__VLS_ctx.desc2);
        // @ts-ignore
        [desc2,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-bold text-xl leading-6 text-primary-800") }, });
        (__VLS_ctx.value2);
        // @ts-ignore
        [value2,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['size-7'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['px-0'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['bg-primary-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['stroke-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['size-7'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['px-0'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['stroke-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['text-primary-800'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(__VLS_props),
                ...__VLS_props,
                Vec: Vec,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
        };
    },
});
;
//# sourceMappingURL=Information.vue.js.map