import { defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    icon: Object,
    activeIcon: Object,
    title: String,
    isActive: Boolean
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        icon: Object,
        activeIcon: Object,
        title: String,
        isActive: Boolean
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center px-4 py-1 rounded-3xl") }, ...{ class: (([__VLS_ctx.isActive && 'bg-primary-50'])) }, });
    __VLS_styleScopedClasses = ([isActive && 'bg-primary-50']);
    const __VLS_0 = (__VLS_ctx.isActive ? __VLS_ctx.activeIcon : __VLS_ctx.icon);
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-8 h-8") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-8 h-8") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("w-8 h-8") }, }));
    // @ts-ignore
    [isActive, isActive, activeIcon, icon,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    (__VLS_ctx.title);
    // @ts-ignore
    [title,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['rounded-3xl'];
        __VLS_styleScopedClasses['w-8'];
        __VLS_styleScopedClasses['h-8'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
        props: {
            icon: Object,
            activeIcon: Object,
            title: String,
            isActive: Boolean
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        icon: Object,
        activeIcon: Object,
        title: String,
        isActive: Boolean
    },
});
;
//# sourceMappingURL=NavComponents.vue.js.map