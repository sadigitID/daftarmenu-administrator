const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    title: String,
    note1: String,
    note2: String,
    desc: String,
    img: String,
    type: {
        type: String,
        default: 'jenis'
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        title: String,
        note1: String,
        note2: String,
        desc: String,
        img: String,
        type: {
            type: String,
            default: 'jenis'
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
    if (__VLS_ctx.type === 'jenis') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-2 p-4 flex-1 rounded-2xl bg-white shadow-[1px_1px_8px_rgba(180,180,180,0.39)] w-[288px] h-[241px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-1 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("self-strech webkit-box webkit-box-orient-vertical webkit-line-clamp-1 overflow-hidden text-gray-800 truncate font-sans font-bold text-xl leading-6") }, });
        (__VLS_ctx.title);
        // @ts-ignore
        [type, title,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start gap-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-center gap-[10px] rounded-full bg-orange-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans text-orange-800 text-xs font-medium leading-[14.4px]") }, });
        (__VLS_ctx.note1);
        // @ts-ignore
        [note1,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-center gap-[10px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans text-xs font-medium leading-[14.4px] text-primary-500") }, });
        (__VLS_ctx.note2);
        // @ts-ignore
        [note2,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-[11px] self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-800 whitespace-nowrap overflow-ellipsis webkit-line-clamp-2 overflow-hidden font-sans text-sm font-normal leading-[22.4px] h-11 self-stretch") }, });
        (__VLS_ctx.desc);
        // @ts-ignore
        [desc,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.img)), alt: (""), ...{ class: ("self-strech object-cover object-center w-[256px] h-[96px] rounded-2xl") }, });
        // @ts-ignore
        [img,];
    }
    else if (__VLS_ctx.type === 'status') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-2 p-4 flex-1 rounded-2xl bg-white shadow-[1px_1px_8px_rgba(180,180,180,0.39)] w-[288px] h-[241px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-1 self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("self-strech webkit-box webkit-box-orient-vertical webkit-line-clamp-1 overflow-hidden text-gray-800 truncate font-sans font-bold text-xl leading-6") }, });
        (__VLS_ctx.title);
        // @ts-ignore
        [type, title,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-start gap-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-center gap-[10px] rounded-full bg-primary-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans text-primary-800 text-xs font-medium leading-[14.4px]") }, });
        (__VLS_ctx.note1);
        // @ts-ignore
        [note1,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-1 items-center gap-[10px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans text-xs font-medium leading-[14.4px] text-red-500") }, });
        (__VLS_ctx.note2);
        // @ts-ignore
        [note2,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-[11px] self-stretch") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-800 whitespace-nowrap overflow-ellipsis webkit-line-clamp-2 overflow-hidden font-sans text-sm font-normal leading-[22.4px] h-11 self-stretch") }, });
        (__VLS_ctx.desc);
        // @ts-ignore
        [desc,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.img)), alt: (""), ...{ class: ("self-strech object-cover object-center w-[256px] h-[96px] rounded-2xl") }, });
        // @ts-ignore
        [img,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-[1px_1px_8px_rgba(180,180,180,0.39)]'];
        __VLS_styleScopedClasses['w-[288px]'];
        __VLS_styleScopedClasses['h-[241px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['self-strech'];
        __VLS_styleScopedClasses['webkit-box'];
        __VLS_styleScopedClasses['webkit-box-orient-vertical'];
        __VLS_styleScopedClasses['webkit-line-clamp-1'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-[10px]'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-orange-50'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-orange-800'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-[10px]'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-primary-500'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-[11px]'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['overflow-ellipsis'];
        __VLS_styleScopedClasses['webkit-line-clamp-2'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['leading-[22.4px]'];
        __VLS_styleScopedClasses['h-11'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['self-strech'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-[256px]'];
        __VLS_styleScopedClasses['h-[96px]'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-[1px_1px_8px_rgba(180,180,180,0.39)]'];
        __VLS_styleScopedClasses['w-[288px]'];
        __VLS_styleScopedClasses['h-[241px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['self-strech'];
        __VLS_styleScopedClasses['webkit-box'];
        __VLS_styleScopedClasses['webkit-box-orient-vertical'];
        __VLS_styleScopedClasses['webkit-line-clamp-1'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-[10px]'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-[10px]'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-red-500'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-[11px]'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['overflow-ellipsis'];
        __VLS_styleScopedClasses['webkit-line-clamp-2'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['leading-[22.4px]'];
        __VLS_styleScopedClasses['h-11'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['self-strech'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-[256px]'];
        __VLS_styleScopedClasses['h-[96px]'];
        __VLS_styleScopedClasses['rounded-2xl'];
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
//# sourceMappingURL=Notes.vue.js.map