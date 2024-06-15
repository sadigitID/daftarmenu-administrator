import { ref, watch } from 'vue';
import { HomeIcon, LaporanIcon, UpgradeIcon, NotesIcon, HomeClick, LaporanClick, UpgradeClick, NotesClick } from '@/components/icons';
import NavComponents from '@/components/NavComponents.vue';
import { useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const navigasiItem = [
    {
        icon: HomeIcon,
        activeIcon: HomeClick,
        title: 'Home',
        path: '/home'
    },
    {
        icon: LaporanIcon,
        activeIcon: LaporanClick,
        title: 'Laporan',
        path: '/home/report'
    },
    {
        icon: UpgradeIcon,
        activeIcon: UpgradeClick,
        title: 'Upgrade',
        path: '/home/upgrade'
    },
    {
        icon: NotesIcon,
        activeIcon: NotesClick,
        title: 'Notes',
        path: '/home/notes'
    }
];
const route = useRoute();
const menuActive = ref(route.fullPath);
watch(route, (to, _) => {
    menuActive.value = to.fullPath;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("h-full w-[120px] bg-primary-900 text-primary-50 flex flex-col justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center space-y-6") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.navigasiItem))) {
        // @ts-ignore
        const __VLS_0 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ((item.path)), key: ((index)), }));
        const __VLS_2 = __VLS_1({ to: ((item.path)), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: ((item.path)), key: ((index)), }));
        // @ts-ignore
        [NavComponents,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(NavComponents, new NavComponents({ icon: ((item.icon)), activeIcon: ((item.activeIcon)), title: ((item.title)), isActive: ((__VLS_ctx.menuActive === item.path)), }));
        const __VLS_7 = __VLS_6({ icon: ((item.icon)), activeIcon: ((item.activeIcon)), title: ((item.title)), isActive: ((__VLS_ctx.menuActive === item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ icon: ((item.icon)), activeIcon: ((item.activeIcon)), title: ((item.title)), isActive: ((__VLS_ctx.menuActive === item.path)), }));
        // @ts-ignore
        [navigasiItem, menuActive,];
        const __VLS_10 = __VLS_pickFunctionalComponentCtx(NavComponents, __VLS_7);
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-[120px]'];
        __VLS_styleScopedClasses['bg-primary-900'];
        __VLS_styleScopedClasses['text-primary-50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['space-y-6'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NavComponents: NavComponents,
                navigasiItem: navigasiItem,
                menuActive: menuActive,
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
//# sourceMappingURL=Navigasi.vue.js.map