import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { computed, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    open: Boolean
});
const emits = defineEmits(['onClose', 'onSelected']);
const open = ref(computed(() => props.open));
function close() {
    emits('onClose', false);
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        open: Boolean
    },
    emits: {},
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
    // @ts-ignore
    const __VLS_0 = {}
        .TransitionRoot;
    ({}.TransitionRoot);
    ({}.TransitionRoot);
    __VLS_components.TransitionRoot;
    __VLS_components.TransitionRoot;
    // @ts-ignore
    [TransitionRoot, TransitionRoot,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ as: ("template"), show: ((__VLS_ctx.open)), }));
    const __VLS_2 = __VLS_1({ as: ("template"), show: ((__VLS_ctx.open)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ as: ("template"), show: ((__VLS_ctx.open)), }));
    // @ts-ignore
    const __VLS_6 = {}
        .Dialog;
    ({}.Dialog);
    ({}.Dialog);
    __VLS_components.Dialog;
    __VLS_components.Dialog;
    // @ts-ignore
    [Dialog, Dialog,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClose': {} }, as: ("div"), ...{ class: ("relative z-20") }, }));
    const __VLS_8 = __VLS_7({ ...{ 'onClose': {} }, as: ("div"), ...{ class: ("relative z-20") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onClose': {} }, as: ("div"), ...{ class: ("relative z-20") }, }));
    let __VLS_12;
    const __VLS_13 = {
        onClose: (__VLS_ctx.close)
    };
    // @ts-ignore
    const __VLS_14 = {}
        .TransitionChild;
    ({}.TransitionChild);
    ({}.TransitionChild);
    __VLS_components.TransitionChild;
    __VLS_components.TransitionChild;
    // @ts-ignore
    [TransitionChild, TransitionChild,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ as: ("template"), enter: ("ease-in-out duration-500"), enterFrom: ("opacity-0"), enterTo: ("opacity-100"), leave: ("ease-in-out duration-500"), leaveFrom: ("opacity-100"), leaveTo: ("opacity-0"), }));
    const __VLS_16 = __VLS_15({ as: ("template"), enter: ("ease-in-out duration-500"), enterFrom: ("opacity-0"), enterTo: ("opacity-100"), leave: ("ease-in-out duration-500"), leaveFrom: ("opacity-100"), leaveTo: ("opacity-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ as: ("template"), enter: ("ease-in-out duration-500"), enterFrom: ("opacity-0"), enterTo: ("opacity-100"), leave: ("ease-in-out duration-500"), leaveFrom: ("opacity-100"), leaveTo: ("opacity-0"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75") }, });
    // @ts-ignore
    [open, close,];
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed inset-0 overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed inset-y-0 right-0 flex max-w-full pointer-events-none") }, });
    // @ts-ignore
    const __VLS_20 = {}
        .TransitionChild;
    ({}.TransitionChild);
    ({}.TransitionChild);
    __VLS_components.TransitionChild;
    __VLS_components.TransitionChild;
    // @ts-ignore
    [TransitionChild, TransitionChild,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ as: ("template"), enter: ("transform transition ease-in-out duration-500 sm:duration-700"), enterFrom: ("translate-x-full"), enterTo: ("translate-x-0"), leave: ("transform transition ease-in-out duration-500 sm:duration-700"), leaveFrom: ("translate-x-0"), leaveTo: ("translate-x-full"), }));
    const __VLS_22 = __VLS_21({ as: ("template"), enter: ("transform transition ease-in-out duration-500 sm:duration-700"), enterFrom: ("translate-x-full"), enterTo: ("translate-x-0"), leave: ("transform transition ease-in-out duration-500 sm:duration-700"), leaveFrom: ("translate-x-0"), leaveTo: ("translate-x-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ as: ("template"), enter: ("transform transition ease-in-out duration-500 sm:duration-700"), enterFrom: ("translate-x-full"), enterTo: ("translate-x-0"), leave: ("transform transition ease-in-out duration-500 sm:duration-700"), leaveFrom: ("translate-x-0"), leaveTo: ("translate-x-full"), }));
    // @ts-ignore
    const __VLS_26 = {}
        .DialogPanel;
    ({}.DialogPanel);
    ({}.DialogPanel);
    __VLS_components.DialogPanel;
    __VLS_components.DialogPanel;
    // @ts-ignore
    [DialogPanel, DialogPanel,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ class: ("relative w-screen max-w-md pointer-events-auto") }, }));
    const __VLS_28 = __VLS_27({ ...{ class: ("relative w-screen max-w-md pointer-events-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ class: ("relative w-screen max-w-md pointer-events-auto") }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col h-full overflow-y-hidden bg-white shadow-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-4 py-4 shadow-lg sm:px-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("slide-over-heading"), ...{ class: ("font-bold text-dark text-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center ml-3 h-7") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, type: ("button"), ...{ class: ("bg-white rounded-md text-dark focus:outline-0 hover:text-gray-500 focus:ring-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("sr-only") }, });
    // @ts-ignore
    [close,];
    // @ts-ignore
    const __VLS_32 = {}
        .XMarkIcon;
    ({}.XMarkIcon);
    __VLS_components.XMarkIcon;
    // @ts-ignore
    [XMarkIcon,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ class: ("w-6 h-6 text-dark") }, "aria-hidden": ("true"), }));
    const __VLS_34 = __VLS_33({ ...{ class: ("w-6 h-6 text-dark") }, "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ class: ("w-6 h-6 text-dark") }, "aria-hidden": ("true"), }));
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-y-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-4 pt-2 pb-5 sm:px-0 sm:pt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-6 space-y-3 overflow-y-auto sm:px-4 md:px-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-0 w-full p-4 bg-gray-50 sm:p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flow-root p-3 -m-3 transition duration-150 ease-in-out rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm font-bold text-dark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-3 inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-xs font-semibold leading-5 text-primary-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block mt-1 text-sm text-dark") }, });
    (__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    let __VLS_10;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['z-20'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['transition-opacity'];
        __VLS_styleScopedClasses['bg-gray-500'];
        __VLS_styleScopedClasses['bg-opacity-75'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['inset-y-0'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['max-w-full'];
        __VLS_styleScopedClasses['pointer-events-none'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['w-screen'];
        __VLS_styleScopedClasses['max-w-md'];
        __VLS_styleScopedClasses['pointer-events-auto'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['overflow-y-hidden'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-xl'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['shadow-lg'];
        __VLS_styleScopedClasses['sm:px-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['text-md'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-3'];
        __VLS_styleScopedClasses['h-7'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['focus:outline-0'];
        __VLS_styleScopedClasses['hover:text-gray-500'];
        __VLS_styleScopedClasses['focus:ring-0'];
        __VLS_styleScopedClasses['sr-only'];
        __VLS_styleScopedClasses['w-6'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['overflow-y-auto'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['pt-2'];
        __VLS_styleScopedClasses['pb-5'];
        __VLS_styleScopedClasses['sm:px-0'];
        __VLS_styleScopedClasses['sm:pt-0'];
        __VLS_styleScopedClasses['my-6'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['overflow-y-auto'];
        __VLS_styleScopedClasses['sm:px-4'];
        __VLS_styleScopedClasses['md:px-6'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['sm:p-6'];
        __VLS_styleScopedClasses['flow-root'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['-m-3'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['duration-150'];
        __VLS_styleScopedClasses['ease-in-out'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['ml-3'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-primary-100'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-0.5'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['leading-5'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-dark'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Dialog: Dialog,
                DialogPanel: DialogPanel,
                TransitionChild: TransitionChild,
                TransitionRoot: TransitionRoot,
                XMarkIcon: XMarkIcon,
                open: open,
                close: close,
            };
        },
        props: {
            open: Boolean
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        open: Boolean
    },
    emits: {},
});
;
//# sourceMappingURL=SlideDialog.vue.js.map