import { useDialogStore } from '@/stores/dialog';
import { RouterView } from 'vue-router';
import { ActionDialog } from '@/components/dialogs';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const dialog = useDialogStore();
const onClose = () => {
    dialog.open = false;
};
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
    // @ts-ignore
    const __VLS_0 = {}
        .ActionDialog;
    ({}.ActionDialog);
    __VLS_components.ActionDialog;
    // @ts-ignore
    [ActionDialog,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onOnClose': {} }, ...{ 'onOnConfirm': {} }, ...{ 'onOnCancel': {} }, showCancelButton: ((__VLS_ctx.dialog.showCancelButton)), dismissOnAction: ((__VLS_ctx.dialog.dismissOnAction)), open: ((__VLS_ctx.dialog.open)), title: ((__VLS_ctx.dialog.title)), message: ((__VLS_ctx.dialog.content)), confirmText: ((__VLS_ctx.dialog.confirmText)), cancelText: ((__VLS_ctx.dialog.cancelText)), type: ((__VLS_ctx.dialog.type)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onOnClose': {} }, ...{ 'onOnConfirm': {} }, ...{ 'onOnCancel': {} }, showCancelButton: ((__VLS_ctx.dialog.showCancelButton)), dismissOnAction: ((__VLS_ctx.dialog.dismissOnAction)), open: ((__VLS_ctx.dialog.open)), title: ((__VLS_ctx.dialog.title)), message: ((__VLS_ctx.dialog.content)), confirmText: ((__VLS_ctx.dialog.confirmText)), cancelText: ((__VLS_ctx.dialog.cancelText)), type: ((__VLS_ctx.dialog.type)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onOnClose': {} }, ...{ 'onOnConfirm': {} }, ...{ 'onOnCancel': {} }, showCancelButton: ((__VLS_ctx.dialog.showCancelButton)), dismissOnAction: ((__VLS_ctx.dialog.dismissOnAction)), open: ((__VLS_ctx.dialog.open)), title: ((__VLS_ctx.dialog.title)), message: ((__VLS_ctx.dialog.content)), confirmText: ((__VLS_ctx.dialog.confirmText)), cancelText: ((__VLS_ctx.dialog.cancelText)), type: ((__VLS_ctx.dialog.type)), }));
    let __VLS_6;
    const __VLS_7 = {
        onOnClose: (__VLS_ctx.onClose)
    };
    const __VLS_8 = {
        onOnConfirm: (...[$event]) => {
            __VLS_ctx.dialog.onConfirm;
            // @ts-ignore
            [dialog, dialog, dialog, dialog, dialog, dialog, dialog, dialog, dialog, onClose,];
        }
    };
    const __VLS_9 = {
        onOnCancel: (...[$event]) => {
            __VLS_ctx.dialog.onCancel;
            // @ts-ignore
            [dialog,];
        }
    };
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_10 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({}));
    const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                RouterView: RouterView,
                ActionDialog: ActionDialog,
                dialog: dialog,
                onClose: onClose,
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

//# sourceMappingURL=App.vue.js.map