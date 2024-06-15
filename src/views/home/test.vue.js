import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const solutions = [
    {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##',
        icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <path
            d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
            stroke="#FB923C"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
        </svg>
      `,
    },
    {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##',
        icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <path
            d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
            stroke="#FB923C"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
        </svg>
      `,
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
        icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
          <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
          <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
          <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
          <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
          <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
      `,
    },
];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed top-16 w-full max-w-sm px-4") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .Popover;
    ({}.Popover);
    ({}.Popover);
    __VLS_components.Popover;
    __VLS_components.Popover;
    // @ts-ignore
    [Popover, Popover,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("relative") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("relative") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("relative") }, }));
    {
        const [{ open }] = __VLS_getSlotParams((__VLS_5.slots).default);
        // @ts-ignore
        const __VLS_6 = {}
            .PopoverButton;
        ({}.PopoverButton);
        ({}.PopoverButton);
        __VLS_components.PopoverButton;
        __VLS_components.PopoverButton;
        // @ts-ignore
        [PopoverButton, PopoverButton,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ((open ? 'text-white' : 'text-white/90')) }, ...{ class: ("group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ((open ? 'text-white' : 'text-white/90')) }, ...{ class: ("group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ class: ((open ? 'text-white' : 'text-white/90')) }, ...{ class: ("group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75") }, }));
        __VLS_styleScopedClasses = (open ? 'text-white' : 'text-white/90');
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_12 = {}
            .ChevronDownIcon;
        ({}.ChevronDownIcon);
        __VLS_components.ChevronDownIcon;
        // @ts-ignore
        [ChevronDownIcon,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ((open ? 'text-orange-300' : 'text-orange-300/70')) }, ...{ class: ("ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80") }, "aria-hidden": ("true"), }));
        const __VLS_14 = __VLS_13({ ...{ class: ((open ? 'text-orange-300' : 'text-orange-300/70')) }, ...{ class: ("ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80") }, "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ class: ((open ? 'text-orange-300' : 'text-orange-300/70')) }, ...{ class: ("ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80") }, "aria-hidden": ("true"), }));
        __VLS_styleScopedClasses = (open ? 'text-orange-300' : 'text-orange-300/70');
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        // @ts-ignore
        const __VLS_18 = {}
            .transition;
        ({}.transition);
        ({}.transition);
        __VLS_components.Transition;
        __VLS_components.transition;
        __VLS_components.Transition;
        __VLS_components.transition;
        // @ts-ignore
        [Transition, Transition,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ enterActiveClass: ("transition duration-200 ease-out"), enterFromClass: ("translate-y-1 opacity-0"), enterToClass: ("translate-y-0 opacity-100"), leaveActiveClass: ("transition duration-150 ease-in"), leaveFromClass: ("translate-y-0 opacity-100"), leaveToClass: ("translate-y-1 opacity-0"), }));
        const __VLS_20 = __VLS_19({ enterActiveClass: ("transition duration-200 ease-out"), enterFromClass: ("translate-y-1 opacity-0"), enterToClass: ("translate-y-0 opacity-100"), leaveActiveClass: ("transition duration-150 ease-in"), leaveFromClass: ("translate-y-0 opacity-100"), leaveToClass: ("translate-y-1 opacity-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ enterActiveClass: ("transition duration-200 ease-out"), enterFromClass: ("translate-y-1 opacity-0"), enterToClass: ("translate-y-0 opacity-100"), leaveActiveClass: ("transition duration-150 ease-in"), leaveFromClass: ("translate-y-0 opacity-100"), leaveToClass: ("translate-y-1 opacity-0"), }));
        // @ts-ignore
        const __VLS_24 = {}
            .PopoverPanel;
        ({}.PopoverPanel);
        ({}.PopoverPanel);
        __VLS_components.PopoverPanel;
        __VLS_components.PopoverPanel;
        // @ts-ignore
        [PopoverPanel, PopoverPanel,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl") }, }));
        const __VLS_26 = __VLS_25({ ...{ class: ("absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl") }, }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative grid gap-8 bg-white p-7 lg:grid-cols-2") }, });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.solutions))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((item.name)), href: ((item.href)), ...{ class: ("-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_directiveFunction(__VLS_ctx.vHtml)((item.icon));
            // @ts-ignore
            [solutions, vHtml,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ml-4") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium text-gray-900") }, });
            (item.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
            (item.description);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-gray-50 p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("##"), ...{ class: ("flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm font-medium text-gray-900") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block text-sm text-gray-500") }, });
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        (__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_5.slots['' /* empty slot name completion */];
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['top-16'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['max-w-sm'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['group'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['bg-orange-700'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['hover:text-white'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus-visible:ring-2'];
        __VLS_styleScopedClasses['focus-visible:ring-white/75'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['duration-150'];
        __VLS_styleScopedClasses['ease-in-out'];
        __VLS_styleScopedClasses['group-hover:text-orange-300/80'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['left-1/2'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['w-screen'];
        __VLS_styleScopedClasses['max-w-sm'];
        __VLS_styleScopedClasses['-translate-x-1/2'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['sm:px-0'];
        __VLS_styleScopedClasses['lg:max-w-3xl'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['shadow-lg'];
        __VLS_styleScopedClasses['ring-1'];
        __VLS_styleScopedClasses['ring-black/5'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-7'];
        __VLS_styleScopedClasses['lg:grid-cols-2'];
        __VLS_styleScopedClasses['-m-3'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['duration-150'];
        __VLS_styleScopedClasses['ease-in-out'];
        __VLS_styleScopedClasses['hover:bg-gray-50'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus-visible:ring'];
        __VLS_styleScopedClasses['focus-visible:ring-orange-500/50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['sm:h-12'];
        __VLS_styleScopedClasses['sm:w-12'];
        __VLS_styleScopedClasses['ml-4'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flow-root'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['duration-150'];
        __VLS_styleScopedClasses['ease-in-out'];
        __VLS_styleScopedClasses['hover:bg-gray-100'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus-visible:ring'];
        __VLS_styleScopedClasses['focus-visible:ring-orange-500/50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-gray-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Popover: Popover,
                PopoverButton: PopoverButton,
                PopoverPanel: PopoverPanel,
                ChevronDownIcon: ChevronDownIcon,
                solutions: solutions,
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
//# sourceMappingURL=test.vue.js.map