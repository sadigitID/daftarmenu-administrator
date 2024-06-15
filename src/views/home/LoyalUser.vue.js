import { User } from "@/components";
import { Prof } from "@/assets/image/";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const user = [
    {
        profile: Prof,
        nama: 'Resto A',
        nilai: '10X',
    },
    {
        profile: Prof,
        nama: 'Resto A',
        nilai: '10X',
    },
    {
        profile: Prof,
        nama: 'Resto A',
        nilai: '10X',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[1440px] h-[1024px] bg-primary-50 pl-36 pt-28 pr-6 pb-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-6 py-12 w-[1272px] h-[835px] bg-white gap-4 rounded-3xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5 w-[394px] h-auto p-6 gap-4 bg-white rounded-2xl flex items-center shadow-[1px_1px_8px_rgba(180,180,180,0.39)]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-start gap-8 flex-1 bottom-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-medium leading-6 text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-normal leading-[22.4px] text-sm") }, });
    for (const [user] of __VLS_getVForSourceType((__VLS_ctx.user))) {
        // @ts-ignore
        const __VLS_0 = {}
            .User;
        ({}.User);
        __VLS_components.User;
        // @ts-ignore
        [User,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ profile: ((user.profile)), nama: ((user.nama)), nilai: ((user.nilai)), }));
        const __VLS_2 = __VLS_1({ profile: ((user.profile)), nama: ((user.nama)), nilai: ((user.nilai)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ profile: ((user.profile)), nama: ((user.nama)), nilai: ((user.nilai)), }));
        // @ts-ignore
        [user,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-[1440px]'];
        __VLS_styleScopedClasses['h-[1024px]'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['pl-36'];
        __VLS_styleScopedClasses['pt-28'];
        __VLS_styleScopedClasses['pr-6'];
        __VLS_styleScopedClasses['pb-20'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-12'];
        __VLS_styleScopedClasses['w-[1272px]'];
        __VLS_styleScopedClasses['h-[835px]'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['rounded-3xl'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['w-[394px]'];
        __VLS_styleScopedClasses['h-auto'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['shadow-[1px_1px_8px_rgba(180,180,180,0.39)]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['leading-[22.4px]'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                User: User,
                user: user,
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
//# sourceMappingURL=LoyalUser.vue.js.map