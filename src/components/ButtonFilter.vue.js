import { reactive, computed } from 'vue';
import { Dropdown } from './icons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const filters = reactive({
    free: false,
    trial: false,
    premium: false,
    radio: null
});
const dropdowns = reactive({
    filters: false,
    options: false
});
const filterOptions = [
    { text: 'Free', value: 'free' },
    { text: 'Trial', value: 'trial' },
    { text: 'Premium', value: 'premium' }
];
const radioOptions = [
    { text: 'Dari Terbaru', value: 'terbaru' },
    { text: 'Dari Terlama', value: 'terlama' }
];
const toggleDropdown = (dropdown) => {
    dropdowns[dropdown] = !dropdowns[dropdown];
};
const selectedFiltersText = computed(() => {
    const selected = filterOptions
        .filter((option) => filters[option.value])
        .map((option) => option.text);
    return selected.length ? selected.join(', ') : 'Filter';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('filters');
                // @ts-ignore
                [toggleDropdown,];
            } }, ...{ class: ("bg-gray-50 text-gray-900 rounded-lg flex text-left text-sm font-bold px-4 py-2 gap-2") }, });
    (__VLS_ctx.selectedFiltersText);
    // @ts-ignore
    const __VLS_0 = {}
        .Dropdown;
    ({}.Dropdown);
    __VLS_components.Dropdown;
    // @ts-ignore
    [Dropdown,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    // @ts-ignore
    [selectedFiltersText,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.dropdowns.filters) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bg-white border items-center justify-center text-left text-sm self-stretch font-bold py-4 px-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("justify-center items-center text-gray-700") }, });
        // @ts-ignore
        [dropdowns,];
        for (const [filter] of __VLS_getVForSourceType((__VLS_ctx.filterOptions))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block p-2 cursor-pointer") }, key: ((filter.value)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), ...{ class: ("form-checkbox") }, });
            (__VLS_ctx.filters[filter.value]);
            // @ts-ignore
            [filterOptions, filters,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
            (filter.text);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("justify-center items-center text-gray-700") }, });
        for (const [option] of __VLS_getVForSourceType((__VLS_ctx.radioOptions))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block p-2 cursor-pointer") }, key: ((option.value)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), ...{ class: ("form-radio") }, value: ((option.value)), });
            (__VLS_ctx.filters.radio);
            // @ts-ignore
            [filters, radioOptions,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
            (option.text);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['form-checkbox'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['form-radio'];
        __VLS_styleScopedClasses['ml-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Dropdown: Dropdown,
                filters: filters,
                dropdowns: dropdowns,
                filterOptions: filterOptions,
                radioOptions: radioOptions,
                toggleDropdown: toggleDropdown,
                selectedFiltersText: selectedFiltersText,
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
//# sourceMappingURL=ButtonFilter.vue.js.map