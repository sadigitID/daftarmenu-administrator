import { ref } from 'vue';
import { EyesClose, EyesOpen } from './icons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    type: {
        validator(value) {
            return ['text', 'password', 'email', 'number'].includes(value);
        },
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    className: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    maxlength: {
        type: Number,
        default: 50
    }
});
const initialValue = ref(props.value);
const emit = defineEmits(['update:value']);
const updateValue = (event) => {
    const value = event.target.value;
    initialValue.value = value;
    emit('update:value', value);
};
const isPasswordVisible = ref(false);
const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        type: {
            validator(value) {
                return ['text', 'password', 'email', 'number'].includes(value);
            },
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number,
            default: 50
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (...[$event]) => {
                __VLS_ctx.updateValue($event);
                // @ts-ignore
                [updateValue,];
            } }, maxlength: ((__VLS_ctx.maxlength)), id: ((__VLS_ctx.id)), name: ((__VLS_ctx.name)), autocomplete: ("off"), type: ((__VLS_ctx.type == 'password' ? (__VLS_ctx.isPasswordVisible ? 'text' : 'password') : __VLS_ctx.type)), placeholder: ((__VLS_ctx.placeholder)), value: ((__VLS_ctx.initialValue)), disabled: ((__VLS_ctx.disabled)), readonly: ((__VLS_ctx.readonly)), ...{ class: (([
                'w-full px-4 py-2 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-50 focus:outline-0 focus:border-0 focus:ring-0',
                __VLS_ctx.className
            ])) }, });
    __VLS_styleScopedClasses = ([
        'w-full px-4 py-2 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-50 focus:outline-0 focus:border-0 focus:ring-0',
        className
    ]);
    // @ts-ignore
    [maxlength, id, name, type, type, isPasswordVisible, placeholder, initialValue, disabled, readonly, className,];
    if (__VLS_ctx.type == 'password') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.togglePasswordVisibility) }, type: ("button"), ...{ class: ("absolute inset-y-0 right-0 flex items-center px-4 text-gray-600") }, });
        if (__VLS_ctx.isPasswordVisible) {
            // @ts-ignore
            const __VLS_0 = {}
                .EyesClose;
            ({}.EyesClose);
            __VLS_components.EyesClose;
            // @ts-ignore
            [EyesClose,];
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
            const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({}));
            // @ts-ignore
            [type, isPasswordVisible, togglePasswordVisibility,];
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        else {
            // @ts-ignore
            const __VLS_6 = {}
                .EyesOpen;
            ({}.EyesOpen);
            __VLS_components.EyesOpen;
            // @ts-ignore
            [EyesOpen,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("text-primary-500") }, }));
            const __VLS_8 = __VLS_7({ ...{ class: ("text-primary-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ ...{ class: ("text-primary-500") }, }));
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['inset-y-0'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['text-primary-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                EyesClose: EyesClose,
                EyesOpen: EyesOpen,
                initialValue: initialValue,
                updateValue: updateValue,
                isPasswordVisible: isPasswordVisible,
                togglePasswordVisibility: togglePasswordVisibility,
            };
        },
        props: {
            type: {
                validator(value) {
                    return ['text', 'password', 'email', 'number'].includes(value);
                },
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            className: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            id: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number,
                default: 50
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
        type: {
            validator(value) {
                return ['text', 'password', 'email', 'number'].includes(value);
            },
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number,
            default: 50
        }
    },
    emits: {},
});
;
//# sourceMappingURL=InputText.vue.js.map