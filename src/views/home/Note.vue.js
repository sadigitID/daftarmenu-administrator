import { Arrow, Search, Add, Red } from '@/components/icons';
import { Info, Note } from '@/components';
import { Menu, Phone } from '@/assets/image';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const infoData = [
    {
        icon: Red,
        title: 'Jenis',
        desc: 'Request Feature',
        value: '800',
        desc2: 'Bug',
        value2: '800',
        type: 'green'
    },
    {
        icon: Red,
        title: 'Status',
        desc: 'Selesai',
        value: '800',
        desc2: 'Belum Selesai',
        value2: '800',
        type: 'gray'
    }
];
const noteData = [
    {
        title: 'Fitur Pencarian',
        note1: 'Bug',
        note2: 'Selesai',
        desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
        img: Phone,
        type: 'jenis'
    },
    {
        title: 'Fitur Pencarian',
        note1: 'Bug',
        note2: 'Selesai',
        desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
        type: 'jenis'
    },
    {
        title: 'Fitur Pencarian',
        note1: 'Request Feature',
        note2: 'Belum Selesai',
        desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
        img: Phone,
        type: 'status'
    },
    {
        title: 'Fitur Pencarian',
        note1: 'Request Feauture',
        note2: 'Belum Selesai',
        desc: 'Ada user yang membutuhkan fitur pencarian dengan filter yang lebih beragam',
        img: Phone,
        type: 'status'
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("flex w-[1100px] h-[525px] p-6 flex-col items-start gap-6 flex-shrink-0 rounded-3xl bg-white m-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-start self-stretch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-start gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("font-sans font-medium text-xl leading-6 text-primary-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-normal text-xs leading-[14.4px] text-gray-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4 self-stretch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-[200px] p-3 items-center gap-2 bg-gray-50 rounded-lg") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .Search;
    ({}.Search);
    ({}.Search);
    __VLS_components.Search;
    __VLS_components.Search;
    // @ts-ignore
    [Search, Search,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("flex-shrink size-6") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("flex-shrink size-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("flex-shrink size-6") }, }));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-normal text-sm leading-[22.4px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-3 items-center gap-2 bg-gray-50 rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans font-bold text-sm leading-[22.4px] text-gray-900") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .Arrow;
    ({}.Arrow);
    ({}.Arrow);
    __VLS_components.Arrow;
    __VLS_components.Arrow;
    // @ts-ignore
    [Arrow, Arrow,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("size-6") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("size-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("size-6") }, }));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-3 items-center gap-2 bg-primary-500 rounded-lg") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .Add;
    ({}.Add);
    ({}.Add);
    __VLS_components.Add;
    __VLS_components.Add;
    // @ts-ignore
    [Add, Add,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("flex-shrink size-6") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("flex-shrink size-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("flex-shrink size-6") }, }));
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-sans text-sm font-bold leading-[22.4 px] text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-[115px] items-center gap-5 flex-shrink-0 self-stretch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.Menu)), alt: (""), ...{ class: ("object-cover object-center w-[396px] h-[115px] rounded-2xl") }, });
    // @ts-ignore
    [Menu,];
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.infoData))) {
        // @ts-ignore
        const __VLS_18 = {}
            .Info;
        ({}.Info);
        __VLS_components.Info;
        // @ts-ignore
        [Info,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ key: ((index)), icon: ((item.icon)), title: ((item.title)), desc: ((item.desc)), value: ((item.value)), desc2: ((item.desc2)), value2: ((item.value2)), type: ((item.type)), }));
        const __VLS_20 = __VLS_19({ key: ((index)), icon: ((item.icon)), title: ((item.title)), desc: ((item.desc)), value: ((item.value)), desc2: ((item.desc2)), value2: ((item.value2)), type: ((item.type)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ key: ((index)), icon: ((item.icon)), title: ((item.title)), desc: ((item.desc)), value: ((item.value)), desc2: ((item.desc2)), value2: ((item.value2)), type: ((item.type)), }));
        // @ts-ignore
        [infoData,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-[1224px] items-start gap-6") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.noteData))) {
        // @ts-ignore
        const __VLS_24 = {}
            .Note;
        ({}.Note);
        __VLS_components.Note;
        // @ts-ignore
        [Note,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ((index)), title: ((item.title)), note1: ((item.note1)), note2: ((item.note2)), desc: ((item.desc)), img: ((item.img)), type: ((item.type)), }));
        const __VLS_26 = __VLS_25({ key: ((index)), title: ((item.title)), note1: ((item.note1)), note2: ((item.note2)), desc: ((item.desc)), img: ((item.img)), type: ((item.type)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ key: ((index)), title: ((item.title)), note1: ((item.note1)), note2: ((item.note2)), desc: ((item.desc)), img: ((item.img)), type: ((item.type)), }));
        // @ts-ignore
        [noteData,];
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-[1100px]'];
        __VLS_styleScopedClasses['h-[525px]'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['flex-shrink-0'];
        __VLS_styleScopedClasses['rounded-3xl'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['m-auto'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['leading-6'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['leading-[14.4px]'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-[200px]'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['flex-shrink'];
        __VLS_styleScopedClasses['size-6'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['leading-[22.4px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['leading-[22.4px]'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['size-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['bg-primary-500'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['flex-shrink'];
        __VLS_styleScopedClasses['size-6'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['leading-[22.4'];
        __VLS_styleScopedClasses['px]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['h-[115px]'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['flex-shrink-0'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['w-[396px]'];
        __VLS_styleScopedClasses['h-[115px]'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-[1224px]'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['gap-6'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Arrow: Arrow,
                Search: Search,
                Add: Add,
                Info: Info,
                Note: Note,
                Menu: Menu,
                infoData: infoData,
                noteData: noteData,
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
//# sourceMappingURL=Note.vue.js.map