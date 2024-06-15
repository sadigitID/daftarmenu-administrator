const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    onClick: {
        type: Function,
        default: () => { }
    },
    label: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    isLoading: {
        type: Boolean,
        default: false
    },
    class: {
        type: String,
        default: ''
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        type: {
            type: String,
            default: 'button'
        },
        onClick: {
            type: Function,
            default: () => { }
        },
        label: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        class: {
            type: String,
            default: ''
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.onClick) }, type: ((__VLS_ctx.type)), disabled: ((__VLS_ctx.disabled)), ...{ class: ((class {
            })) }, ...{ class: ("px-4 py-2 text-sm font-bold text-white border-transparent rounded-lg border-primary-500 bg-primary-500 focus:outline-0 disabled:bg-primary-400") }, });
    __VLS_styleScopedClasses = (class {
    });
    var __VLS_0 = {};
    // @ts-ignore
    [onClick, type, disabled,];
    if (!__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.label);
        // @ts-ignore
        [isLoading, label,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_1 = {}
            .center;
        ({}.center);
        ({}.center);
        __VLS_components.Center;
        __VLS_components.center;
        __VLS_components.Center;
        __VLS_components.center;
        // @ts-ignore
        [Center, Center,];
        // @ts-ignore
        const __VLS_2 = __VLS_asFunctionalComponent(__VLS_1, new __VLS_1({}));
        const __VLS_3 = __VLS_2({}, ...__VLS_functionalComponentArgsRest(__VLS_2));
        ({}({}));
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("w-5 h-5 mr-3 -ml-1 text-white animate-spin") }, xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.circle, __VLS_intrinsicElements.circle)({ ...{ class: ("opacity-25") }, cx: ("12"), cy: ("12"), r: ("10"), stroke: ("currentColor"), "stroke-width": ("4"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ ...{ class: ("opacity-75") }, fill: ("currentColor"), d: ("M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"), });
        (__VLS_6.slots).default;
        const __VLS_6 = __VLS_pickFunctionalComponentCtx(__VLS_1, __VLS_3);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['border-transparent'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border-primary-500'];
        __VLS_styleScopedClasses['bg-primary-500'];
        __VLS_styleScopedClasses['focus:outline-0'];
        __VLS_styleScopedClasses['disabled:bg-primary-400'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['mr-3'];
        __VLS_styleScopedClasses['-ml-1'];
        __VLS_styleScopedClasses['text-white'];
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
            return {};
        },
        props: {
            type: {
                type: String,
                default: 'button'
            },
            onClick: {
                type: Function,
                default: () => { }
            },
            label: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            class: {
                type: String,
                default: ''
            }
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: 'button'
        },
        onClick: {
            type: Function,
            default: () => { }
        },
        label: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        class: {
            type: String,
            default: ''
        }
    },
});
export default {};
;
//# sourceMappingURL=ButtonPrimary.vue.js.map