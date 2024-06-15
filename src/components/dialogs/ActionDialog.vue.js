import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { computed, ref } from 'vue';
import { ErrorIcon, SuccessIcon, WarningIcon } from '@/components/icons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    open: Boolean,
    title: String,
    message: String,
    cancelText: {
        type: String,
        default: 'Batal'
    },
    confirmText: {
        type: String,
        default: 'Oke'
    },
    showCancelButton: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'normal'
    },
    dismissOnAction: {
        type: Boolean,
        default: true
    }
});
const emits = defineEmits(['onClose', 'onCancel', 'onConfirm']);
const open = ref(computed(() => props.open));
const title = ref(computed(() => props.title));
const message = ref(computed(() => props.message));
const cancelText = ref(computed(() => props.cancelText));
const confirmText = ref(computed(() => props.confirmText));
const type = ref(computed(() => props.type));
const close = () => {
    emits('onClose', false);
};
const handleOnCancel = () => {
    emits('onCancel');
    if (props.dismissOnAction) {
        close();
    }
};
const handleOnConfirm = () => {
    emits('onConfirm');
    if (props.dismissOnAction) {
        close();
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        open: Boolean,
        title: String,
        message: String,
        cancelText: {
            type: String,
            default: 'Batal'
        },
        confirmText: {
            type: String,
            default: 'Oke'
        },
        showCancelButton: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'normal'
        },
        dismissOnAction: {
            type: Boolean,
            default: true
        }
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ as: ("div"), ...{ class: ("relative z-40") }, }));
    const __VLS_8 = __VLS_7({ as: ("div"), ...{ class: ("relative z-40") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ as: ("div"), ...{ class: ("relative z-40") }, }));
    // @ts-ignore
    const __VLS_12 = {}
        .TransitionChild;
    ({}.TransitionChild);
    ({}.TransitionChild);
    __VLS_components.TransitionChild;
    __VLS_components.TransitionChild;
    // @ts-ignore
    [TransitionChild, TransitionChild,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ as: ("template"), enter: ("ease-out duration-300"), enterFrom: ("opacity-0"), enterTo: ("opacity-100"), leave: ("ease-in duration-200"), leaveFrom: ("opacity-100"), leaveTo: ("opacity-0"), }));
    const __VLS_14 = __VLS_13({ as: ("template"), enter: ("ease-out duration-300"), enterFrom: ("opacity-0"), enterTo: ("opacity-100"), leave: ("ease-in duration-200"), leaveFrom: ("opacity-100"), leaveTo: ("opacity-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ as: ("template"), enter: ("ease-out duration-300"), enterFrom: ("opacity-0"), enterTo: ("opacity-100"), leave: ("ease-in duration-200"), leaveFrom: ("opacity-100"), leaveTo: ("opacity-0"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75") }, });
    // @ts-ignore
    [open,];
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed inset-0 z-10 overflow-y-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center min-h-full p-4 text-center sm:p-0") }, });
    // @ts-ignore
    const __VLS_18 = {}
        .TransitionChild;
    ({}.TransitionChild);
    ({}.TransitionChild);
    __VLS_components.TransitionChild;
    __VLS_components.TransitionChild;
    // @ts-ignore
    [TransitionChild, TransitionChild,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ as: ("template"), enter: ("ease-out duration-300"), enterFrom: ("opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"), enterTo: ("opacity-100 translate-y-0 sm:scale-100"), leave: ("ease-in duration-200"), leaveFrom: ("opacity-100 translate-y-0 sm:scale-100"), leaveTo: ("opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"), }));
    const __VLS_20 = __VLS_19({ as: ("template"), enter: ("ease-out duration-300"), enterFrom: ("opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"), enterTo: ("opacity-100 translate-y-0 sm:scale-100"), leave: ("ease-in duration-200"), leaveFrom: ("opacity-100 translate-y-0 sm:scale-100"), leaveTo: ("opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ as: ("template"), enter: ("ease-out duration-300"), enterFrom: ("opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"), enterTo: ("opacity-100 translate-y-0 sm:scale-100"), leave: ("ease-in duration-200"), leaveFrom: ("opacity-100 translate-y-0 sm:scale-100"), leaveTo: ("opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"), }));
    if (__VLS_ctx.type !== 'progress') {
        // @ts-ignore
        const __VLS_24 = {}
            .DialogPanel;
        ({}.DialogPanel);
        ({}.DialogPanel);
        __VLS_components.DialogPanel;
        __VLS_components.DialogPanel;
        // @ts-ignore
        [DialogPanel, DialogPanel,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("relative p-4 overflow-hidden text-left transition-all transform bg-white shadow-xl sm:max-w-sm sm:p-6 rounded-2xl sm:my-8 sm:w-full") }, }));
        const __VLS_26 = __VLS_25({ ...{ class: ("relative p-4 overflow-hidden text-left transition-all transform bg-white shadow-xl sm:max-w-sm sm:p-6 rounded-2xl sm:my-8 sm:w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("relative p-4 overflow-hidden text-left transition-all transform bg-white shadow-xl sm:max-w-sm sm:p-6 rounded-2xl sm:my-8 sm:w-full") }, }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center mx-auto rounded-full w-14 h-14") }, });
        if (__VLS_ctx.type === 'error') {
            // @ts-ignore
            const __VLS_30 = {}
                .ErrorIcon;
            ({}.ErrorIcon);
            __VLS_components.ErrorIcon;
            // @ts-ignore
            [ErrorIcon,];
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("w-full h-full text-red-500") }, }));
            const __VLS_32 = __VLS_31({ ...{ class: ("w-full h-full text-red-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{ class: ("w-full h-full text-red-500") }, }));
            // @ts-ignore
            [type, type,];
            const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        }
        else if (__VLS_ctx.type === 'warning') {
            // @ts-ignore
            const __VLS_36 = {}
                .WarningIcon;
            ({}.WarningIcon);
            __VLS_components.WarningIcon;
            // @ts-ignore
            [WarningIcon,];
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("w-full h-full") }, }));
            const __VLS_38 = __VLS_37({ ...{ class: ("w-full h-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({}({ ...{ class: ("w-full h-full") }, }));
            // @ts-ignore
            [type,];
            const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        }
        else {
            // @ts-ignore
            const __VLS_42 = {}
                .SuccessIcon;
            ({}.SuccessIcon);
            __VLS_components.SuccessIcon;
            // @ts-ignore
            [SuccessIcon,];
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("w-full h-full") }, }));
            const __VLS_44 = __VLS_43({ ...{ class: ("w-full h-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
            ({}({ ...{ class: ("w-full h-full") }, }));
            const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-3 text-center") }, });
        // @ts-ignore
        const __VLS_48 = {}
            .DialogTitle;
        ({}.DialogTitle);
        ({}.DialogTitle);
        __VLS_components.DialogTitle;
        __VLS_components.DialogTitle;
        // @ts-ignore
        [DialogTitle, DialogTitle,];
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ as: ("h1"), ...{ class: ("text-xl font-bold text-center text-dark") }, }));
        const __VLS_50 = __VLS_49({ as: ("h1"), ...{ class: ("text-xl font-bold text-center text-dark") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ as: ("h1"), ...{ class: ("text-xl font-bold text-center text-dark") }, }));
        (__VLS_ctx.title);
        // @ts-ignore
        [title,];
        (__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-base text-center text-dark") }, });
        (__VLS_ctx.message);
        // @ts-ignore
        [message,];
        if (__VLS_ctx.type === 'error' || __VLS_ctx.type === 'warning') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-row justify-between pt-4 space-x-4") }, });
            if (__VLS_ctx.showCancelButton) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.type !== 'progress')))
                                return;
                            if (!((__VLS_ctx.type === 'error' || __VLS_ctx.type === 'warning')))
                                return;
                            if (!((__VLS_ctx.showCancelButton)))
                                return;
                            __VLS_ctx.handleOnCancel();
                            // @ts-ignore
                            [type, type, showCancelButton, handleOnCancel,];
                        } }, type: ("button"), ...{ class: ("inline-flex justify-center flex-1 w-full px-4 py-2 text-sm font-bold text-gray-800 rounded-lg bg-gray-50") }, ref: ("cancelButtonRef"), });
                // @ts-ignore
                (__VLS_ctx.cancelButtonRef);
                (__VLS_ctx.cancelText);
                // @ts-ignore
                [cancelButtonRef, cancelText,];
            }
            if (__VLS_ctx.type == 'error') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.type !== 'progress')))
                                return;
                            if (!((__VLS_ctx.type === 'error' || __VLS_ctx.type === 'warning')))
                                return;
                            if (!((__VLS_ctx.type == 'error')))
                                return;
                            __VLS_ctx.handleOnConfirm();
                            // @ts-ignore
                            [type, handleOnConfirm,];
                        } }, type: ("button"), ...{ class: ("inline-flex justify-center flex-1 w-full px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-lg") }, });
                (__VLS_ctx.confirmText);
                // @ts-ignore
                [confirmText,];
            }
            else if (__VLS_ctx.type == 'warning') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.type !== 'progress')))
                                return;
                            if (!((__VLS_ctx.type === 'error' || __VLS_ctx.type === 'warning')))
                                return;
                            if (!(!((__VLS_ctx.type == 'error'))))
                                return;
                            if (!((__VLS_ctx.type == 'warning')))
                                return;
                            __VLS_ctx.handleOnConfirm();
                            // @ts-ignore
                            [type, handleOnConfirm,];
                        } }, type: ("button"), ...{ class: ("inline-flex justify-center flex-1 w-full px-4 py-2 text-sm font-bold text-white rounded-lg bg-primary-500") }, });
                (__VLS_ctx.confirmText);
                // @ts-ignore
                [confirmText,];
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex pt-4") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.type !== 'progress')))
                            return;
                        if (!(!((__VLS_ctx.type === 'error' || __VLS_ctx.type === 'warning'))))
                            return;
                        __VLS_ctx.handleOnConfirm();
                        // @ts-ignore
                        [handleOnConfirm,];
                    } }, type: ("button"), ...{ class: (([
                        'bg-primary-500',
                        'inline-flex flex-1 justify-center w-full px-4 py-2 text-sm font-bold text-white rounded-lg'
                    ])) }, });
            __VLS_styleScopedClasses = ([
                'bg-primary-500',
                'inline-flex flex-1 justify-center w-full px-4 py-2 text-sm font-bold text-white rounded-lg'
            ]);
            (__VLS_ctx.confirmText);
            // @ts-ignore
            [confirmText,];
        }
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    }
    else {
        // @ts-ignore
        const __VLS_54 = {}
            .DialogPanel;
        ({}.DialogPanel);
        ({}.DialogPanel);
        __VLS_components.DialogPanel;
        __VLS_components.DialogPanel;
        // @ts-ignore
        [DialogPanel, DialogPanel,];
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ class: ("relative transition-all transform bg-transparent rounded-full") }, }));
        const __VLS_56 = __VLS_55({ ...{ class: ("relative transition-all transform bg-transparent rounded-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        ({}({ ...{ class: ("relative transition-all transform bg-transparent rounded-full") }, }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("w-14 h-14 text-primary-900 animate-spin") }, fill: ("none"), viewBox: ("0 0 24 24"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.circle, __VLS_intrinsicElements.circle)({ ...{ class: ("opacity-25") }, cx: ("12"), cy: ("12"), r: ("10"), stroke: ("currentColor"), "stroke-width": ("4"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ ...{ class: ("opacity-75") }, fill: ("currentColor"), d: ("M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"), });
        (__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    }
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['z-40'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['transition-opacity'];
        __VLS_styleScopedClasses['bg-gray-500'];
        __VLS_styleScopedClasses['bg-opacity-75'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['overflow-y-auto'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['min-h-full'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['sm:p-0'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-xl'];
        __VLS_styleScopedClasses['sm:max-w-sm'];
        __VLS_styleScopedClasses['sm:p-6'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['sm:my-8'];
        __VLS_styleScopedClasses['sm:w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['w-14'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['text-red-500'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-row'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['pt-4'];
        __VLS_styleScopedClasses['space-x-4'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-red-500'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['bg-primary-500'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['pt-4'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['bg-transparent'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['w-14'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['animate-spin'];
        __VLS_styleScopedClasses['opacity-25'];
        __VLS_styleScopedClasses['opacity-75'];
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
                DialogTitle: DialogTitle,
                TransitionChild: TransitionChild,
                TransitionRoot: TransitionRoot,
                ErrorIcon: ErrorIcon,
                SuccessIcon: SuccessIcon,
                WarningIcon: WarningIcon,
                open: open,
                title: title,
                message: message,
                cancelText: cancelText,
                confirmText: confirmText,
                type: type,
                handleOnCancel: handleOnCancel,
                handleOnConfirm: handleOnConfirm,
            };
        },
        props: {
            open: Boolean,
            title: String,
            message: String,
            cancelText: {
                type: String,
                default: 'Batal'
            },
            confirmText: {
                type: String,
                default: 'Oke'
            },
            showCancelButton: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'normal'
            },
            dismissOnAction: {
                type: Boolean,
                default: true
            }
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        open: Boolean,
        title: String,
        message: String,
        cancelText: {
            type: String,
            default: 'Batal'
        },
        confirmText: {
            type: String,
            default: 'Oke'
        },
        showCancelButton: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'normal'
        },
        dismissOnAction: {
            type: Boolean,
            default: true
        }
    },
    emits: {},
});
;
//# sourceMappingURL=ActionDialog.vue.js.map