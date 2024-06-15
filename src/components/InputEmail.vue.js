import { useAccountStore } from '@/stores/account';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const account = useAccountStore();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), name: ("email"), placeholder: ("Masukan Email"), ...{ class: ("w-full rounded-lg py-1 border-x-8 font-sans border-gray-50 bg-gray-50 text-dark text-start") }, required: (true), });
    (__VLS_ctx.account.email);
    // @ts-ignore
    [account,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['border-x-8'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['border-gray-50'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['text-start'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                account: account,
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
//# sourceMappingURL=InputEmail.vue.js.map