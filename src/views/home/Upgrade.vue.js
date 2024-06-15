import { IconSearch, UserInvalid, UserValid } from '@/components/icons';
import { Food } from '@/assets/image';
import { CardResto } from '@/components/card';
import { RestoProfile } from '@/assets/image';
import { InputText } from '@/components/';
import { ButtonFilter } from '@/components';
import { onMounted, ref } from 'vue';
import SlideDialog from '@/components/dialogs/SlideDialog.vue';
import { useRestoStore } from '@/stores/resto';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const searchQuery = ref('');
const resto = useRestoStore();
const dataList = ref([
    {
        account: {
            account_name: 'Holywing Resto',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: true,
            account_subscription_name: 'Paket 3 bulan',
            account_subscription_expired: 1726444800000,
            //dummy
            account_subscription_id: 3
        },
        resto: {
            resto_id: 2689,
            resto_image: 'https://api.daftarmenu.com/dashboard/file/img_cover_resto/a6dd5313e1de71ab50d34ecf505c5b40.jpg',
            resto_name: 'Holywing Resto',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 20,
            resto_menu: 17
        }
    },
    {
        account: {
            account_name: 'Kedai Dsella',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: true,
            account_subscription_name: 'Paket 1 bulan',
            account_subscription_expired: 1,
            //dummy
            account_subscription_id: 2
        },
        resto: {
            resto_id: 1,
            resto_image: RestoProfile,
            resto_name: 'Kedai Dsella',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 200,
            resto_menu: 5
        }
    },
    {
        account: {
            account_name: 'Kedai Pak Bagus',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: false,
            account_subscription_name: 'Tidak ada paket dipilih',
            account_subscription_expired: 1,
            //dummy
            account_subscription_id: 0
        },
        resto: {
            resto_id: 2,
            resto_image: RestoProfile,
            resto_name: 'Kedai Pak Bagus',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 200,
            resto_menu: 5
        }
    },
    {
        account: {
            account_name: 'Kedai Pak Bagus',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: false,
            account_subscription_name: 'Tidak ada paket dipilih',
            account_subscription_expired: 1,
            //dummy
            account_subscription_id: 0
        },
        resto: {
            resto_id: 2,
            resto_image: RestoProfile,
            resto_name: 'Kedai Pak Bagus',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 200,
            resto_menu: 5
        }
    },
    {
        account: {
            account_name: 'Kedai Pak Bagus',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: true,
            account_subscription_name: 'Trial',
            account_subscription_expired: 1,
            //dummy
            account_subscription_id: 1
        },
        resto: {
            resto_id: 2,
            resto_image: RestoProfile,
            resto_name: 'Kedai Pak Bagus',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 200,
            resto_menu: 5
        }
    },
    {
        account: {
            account_name: 'Kedai Pak Bagus',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: true,
            account_subscription_name: 'Paket 12 bulan',
            account_subscription_expired: 1,
            //dummy
            account_subscription_id: 4
        },
        resto: {
            resto_id: 2,
            resto_image: RestoProfile,
            resto_name: 'Kedai Pak Bagus',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 200,
            resto_menu: 5
        }
    },
    {
        account: {
            account_name: 'Kedai Pak Bagus',
            account_email: 'restoholywing@gmail.com',
            account_access: 'Super Admin',
            account_subscription: true,
            account_subscription_name: 'Paket 3 Bulan',
            account_subscription_expired: 1,
            //dummy
            account_subscription_id: 3
        },
        resto: {
            resto_id: 2,
            resto_image: RestoProfile,
            resto_name: 'Kedai Pak Bagus',
            resto_address: 'Street Nº 203,\r\nPreah Sihanoukville, KPS',
            resto_contact: '628996221104',
            resto_country: 'ID',
            resto_currency: 'USD',
            resto_slug: 'holywing-resto',
            resto_order_method: 0,
            // dummy
            resto_transaction_today: 200,
            resto_menu: 5
        }
    }
]);
onMounted(() => {
    // setTimeout(() => {
    //   dataList.value = []
    // }, 5000)
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
    // @ts-ignore
    [SlideDialog,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SlideDialog, new SlideDialog({ ...{ 'onOnClose': {} }, open: ((__VLS_ctx.resto.resto != null)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onOnClose': {} }, open: ((__VLS_ctx.resto.resto != null)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ 'onOnClose': {} }, open: ((__VLS_ctx.resto.resto != null)), }));
    let __VLS_5;
    const __VLS_6 = {
        onOnClose: (...[$event]) => {
            __VLS_ctx.resto.resto = null;
            // @ts-ignore
            [resto, resto,];
        }
    };
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(SlideDialog, __VLS_1);
    let __VLS_2;
    let __VLS_3;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("upgrade"), ...{ class: ("container overflow-hidden w-[1100px] h-[525px] m-auto gap-6 bg-white p-6 rounded-3xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-extrabold text-xl text-primary-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-primary-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("search"), ...{ class: ("bg-gray-50 m-auto justify-center items-center flex rounded-lg px-2") }, });
    // @ts-ignore
    const __VLS_7 = {}
        .IconSearch;
    ({}.IconSearch);
    __VLS_components.IconSearch;
    // @ts-ignore
    [IconSearch,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("w-4 h-4") }, }));
    const __VLS_9 = __VLS_8({ ...{ class: ("w-4 h-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ ...{ class: ("w-4 h-4") }, }));
    const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
    // @ts-ignore
    const __VLS_13 = {}
        .InputText;
    ({}.InputText);
    __VLS_components.InputText;
    // @ts-ignore
    [InputText,];
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ class: ("text-sm font-sans text-gray-800") }, placeholder: ("Cari Menu"), }));
    const __VLS_15 = __VLS_14({ ...{ class: ("text-sm font-sans text-gray-800") }, placeholder: ("Cari Menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    ({}({ ...{ class: ("text-sm font-sans text-gray-800") }, placeholder: ("Cari Menu"), }));
    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    // @ts-ignore
    const __VLS_19 = {}
        .ButtonFilter;
    ({}.ButtonFilter);
    __VLS_components.ButtonFilter;
    // @ts-ignore
    [ButtonFilter,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    ({}({}));
    const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("justify-center items-center flex gap-5 py-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center rounded-xl overflow-hidden w-[340px] h-[104px] self-stretch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.Food)), alt: ("food"), ...{ class: ("object-cover object-center") }, });
    // @ts-ignore
    [Food,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primary-900 gap-4 flex justify-center items-center rounded-xl py-4 px-6 w-auto h-[100%]") }, });
    // @ts-ignore
    const __VLS_25 = {}
        .UserValid;
    ({}.UserValid);
    __VLS_components.UserValid;
    // @ts-ignore
    [UserValid,];
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ class: ("w-12 h-12 text-white") }, }));
    const __VLS_27 = __VLS_26({ ...{ class: ("w-12 h-12 text-white") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    ({}({ ...{ class: ("w-12 h-12 text-white") }, }));
    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-white text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-white text-xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primary-50 flex gap-4 justify-center items-center rounded-xl py-4 px-6 w-auto h-[100%]") }, });
    // @ts-ignore
    const __VLS_31 = {}
        .UserInvalid;
    ({}.UserInvalid);
    __VLS_components.UserInvalid;
    // @ts-ignore
    [UserInvalid,];
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ class: ("fill-primary-900") }, }));
    const __VLS_33 = __VLS_32({ ...{ class: ("fill-primary-900") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    ({}({ ...{ class: ("fill-primary-900") }, }));
    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-start gap-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-primary-900 text-lg font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-primary-900 text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center gap-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-primary-900 text-lg font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-primary-900 text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primary-50 flex flex-col justify-center items-center rounded-2xl overflow-hidden w-auto h-[100%]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primary-50 gap-2 flex py-2 px-6 items-center justify-center w-[328px] h-[64px]") }, });
    // @ts-ignore
    const __VLS_37 = {}
        .UserValid;
    ({}.UserValid);
    __VLS_components.UserValid;
    // @ts-ignore
    [UserValid,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ class: ("fill-primary-900") }, }));
    const __VLS_39 = __VLS_38({ ...{ class: ("fill-primary-900") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    ({}({ ...{ class: ("fill-primary-900") }, }));
    const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-primary-900 text-xs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-primary-900 text-xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primary-900 flex items-center justify-between px-6 py-2 w-[100%] h-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center gap-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-sm text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl font-bold text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center gap-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-sm text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xl font-bold text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ name: ("resto"), id: ("resto"), ...{ class: ("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6") }, });
    for (const [data] of __VLS_getVForSourceType((__VLS_ctx.dataList))) {
        // @ts-ignore
        const __VLS_43 = {}
            .CardResto;
        ({}.CardResto);
        __VLS_components.CardResto;
        // @ts-ignore
        [CardResto,];
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ key: ((data.resto.resto_id)), data: ((data)), }));
        const __VLS_45 = __VLS_44({ key: ((data.resto.resto_id)), data: ((data)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        ({}({ key: ((data.resto.resto_id)), data: ((data)), }));
        // @ts-ignore
        [dataList,];
        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['w-[1100px]'];
        __VLS_styleScopedClasses['h-[525px]'];
        __VLS_styleScopedClasses['m-auto'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['rounded-3xl'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['text-extrabold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['m-auto'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['py-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['w-[340px]'];
        __VLS_styleScopedClasses['h-[104px]'];
        __VLS_styleScopedClasses['self-stretch'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['object-center'];
        __VLS_styleScopedClasses['bg-primary-900'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['w-auto'];
        __VLS_styleScopedClasses['h-[100%]'];
        __VLS_styleScopedClasses['w-12'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['w-auto'];
        __VLS_styleScopedClasses['h-[100%]'];
        __VLS_styleScopedClasses['fill-primary-900'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['w-auto'];
        __VLS_styleScopedClasses['h-[100%]'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['w-[328px]'];
        __VLS_styleScopedClasses['h-[64px]'];
        __VLS_styleScopedClasses['fill-primary-900'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-primary-900'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['bg-primary-900'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['w-[100%]'];
        __VLS_styleScopedClasses['h-auto'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['md:grid-cols-3'];
        __VLS_styleScopedClasses['lg:grid-cols-4'];
        __VLS_styleScopedClasses['xl:grid-cols-5'];
        __VLS_styleScopedClasses['gap-x-4'];
        __VLS_styleScopedClasses['gap-y-6'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                IconSearch: IconSearch,
                UserInvalid: UserInvalid,
                UserValid: UserValid,
                Food: Food,
                CardResto: CardResto,
                InputText: InputText,
                ButtonFilter: ButtonFilter,
                SlideDialog: SlideDialog,
                resto: resto,
                dataList: dataList,
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
//# sourceMappingURL=Upgrade.vue.js.map