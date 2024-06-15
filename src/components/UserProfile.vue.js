const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    profile: String,
    nama: String,
    nilai: String
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        profile: String,
        nama: String,
        nilai: String
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center self-stretch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("size-8 rounded[32px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.profile)), alt: (""), });
    // @ts-ignore
    [profile,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-normal text-base leading-5") }, });
    (__VLS_ctx.nama);
    // @ts-ignore
    [nama,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium text-lg") }, });
    (__VLS_ctx.nilai);
    // @ts-ignore
    [nilai,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['size-8'];
        __VLS_styleScopedClasses['rounded[32px]'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['leading-5'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-lg'];
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
//# sourceMappingURL=UserProfile.vue.js.map