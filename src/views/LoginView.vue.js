import { ref } from 'vue';
import { Login } from '@/assets/image';
import { useAccountStore } from '@/stores/account';
import { ButtonPrimary, InputText } from '@/components';
import { useDialogStore } from '@/stores/dialog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const dialog = useDialogStore();
const account = useAccountStore();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const validate = () => {
    isLoading.value = false;
    if (!email.value) {
        onEmptyEmail();
        return false;
    }
    if (!password.value) {
        onEmptyPassword();
        return false;
    }
    return true;
};
const onLogin = () => {
    if (!isLoading.value) {
        isLoading.value = true;
        setTimeout(() => {
            if (validate()) {
                isLoading.value = false;
                if (email.value == 'demo@demo.com' && password.value == 'demo') {
                    onSuccessfulLogin();
                }
                else {
                    onFailedLogin();
                }
            }
        }, 4000);
    }
};
const onSuccessfulLogin = () => {
    account.setAuthenticated(true);
    dialog.title = 'Login Berhasil';
    dialog.content = 'Selamat datang di aplikasi admin daftarmenu!';
    dialog.confirmText = 'Lanjutkan';
    dialog.type = 'success';
    dialog.showCancelButton = false;
    dialog.dismissOnAction = false;
    dialog.onConfirm = () => {
        dialog.open = false;
        location.href = '/home';
    };
    dialog.open = true;
};
const onFailedLogin = () => {
    dialog.title = 'Login Gagal';
    dialog.content = 'Email atau password Anda salah.';
    dialog.confirmText = 'Mengerti';
    dialog.type = 'error';
    dialog.showCancelButton = false;
    dialog.open = true;
};
const onEmptyEmail = () => {
    dialog.title = 'Email kosong';
    dialog.content = 'Silahkan masukan email Anda.';
    dialog.confirmText = 'Mengerti';
    dialog.type = 'error';
    dialog.showCancelButton = false;
    dialog.open = true;
};
const onEmptyPassword = () => {
    dialog.title = 'Password kosong';
    dialog.content = 'Silahkan masukan password Anda.';
    dialog.confirmText = 'Mengerti';
    dialog.type = 'error';
    dialog.showCancelButton = false;
    dialog.open = true;
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid h-screen grid-cols-1 p-4 lg:p-6 place-items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("container items-center p-4 bg-white lg:p-6 lg:flex lg:flex-row lg:space-x-6 rounded-2xl max-w-80 lg:max-w-screen-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("font-sans text-3xl text-dark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-4 text-gray-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.onLogin) }, id: ("login"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col mx-2 mb-2 space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("font-sans text-base text-dark") }, });
    // @ts-ignore
    [onLogin,];
    // @ts-ignore
    const __VLS_0 = {}
        .InputText;
    ({}.InputText);
    __VLS_components.InputText;
    // @ts-ignore
    [InputText,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:value': {} }, disabled: ((__VLS_ctx.isLoading)), type: ("email"), placeholder: ("Masukan Email"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:value': {} }, disabled: ((__VLS_ctx.isLoading)), type: ("email"), placeholder: ("Masukan Email"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:value': {} }, disabled: ((__VLS_ctx.isLoading)), type: ("email"), placeholder: ("Masukan Email"), }));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:value': (...[$event]) => {
            __VLS_ctx.email = $event;
            // @ts-ignore
            [isLoading, email,];
        }
    };
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("font-sans text-base text-dark") }, });
    // @ts-ignore
    const __VLS_8 = {}
        .InputText;
    ({}.InputText);
    __VLS_components.InputText;
    // @ts-ignore
    [InputText,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onUpdate:value': {} }, type: ("password"), disabled: ((__VLS_ctx.isLoading)), placeholder: ("Masukan Password"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onUpdate:value': {} }, type: ("password"), disabled: ((__VLS_ctx.isLoading)), placeholder: ("Masukan Password"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onUpdate:value': {} }, type: ("password"), disabled: ((__VLS_ctx.isLoading)), placeholder: ("Masukan Password"), }));
    let __VLS_14;
    const __VLS_15 = {
        'onUpdate:value': (...[$event]) => {
            __VLS_ctx.password = $event;
            // @ts-ignore
            [isLoading, password,];
        }
    };
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    let __VLS_11;
    let __VLS_12;
    // @ts-ignore
    const __VLS_16 = {}
        .ButtonPrimary;
    ({}.ButtonPrimary);
    __VLS_components.ButtonPrimary;
    // @ts-ignore
    [ButtonPrimary,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ type: ("submit"), label: ("Login"), isLoading: ((__VLS_ctx.isLoading)), disabled: ((__VLS_ctx.isLoading)), }));
    const __VLS_18 = __VLS_17({ type: ("submit"), label: ("Login"), isLoading: ((__VLS_ctx.isLoading)), disabled: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ type: ("submit"), label: ("Login"), isLoading: ((__VLS_ctx.isLoading)), disabled: ((__VLS_ctx.isLoading)), }));
    // @ts-ignore
    [isLoading, isLoading,];
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("mt-8 text-sm font-medium text-center text-primary-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xs font-medium text-center text-primary-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center flex-1 rounded-lg bg-primary-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("max-h-[400px]") }, src: ((__VLS_ctx.Login)), alt: ("halaman login"), });
    // @ts-ignore
    [Login,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['lg:p-6'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['lg:p-6'];
        __VLS_styleScopedClasses['lg:flex'];
        __VLS_styleScopedClasses['lg:flex-row'];
        __VLS_styleScopedClasses['lg:space-x-6'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['max-w-80'];
        __VLS_styleScopedClasses['lg:max-w-screen-lg'];
        __VLS_styleScopedClasses['mx-2'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['mx-2'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['space-y-4'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['font-sans'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-dark'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-primary-800'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['bg-primary-50'];
        __VLS_styleScopedClasses['max-h-[400px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Login: Login,
                ButtonPrimary: ButtonPrimary,
                InputText: InputText,
                email: email,
                password: password,
                isLoading: isLoading,
                onLogin: onLogin,
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
//# sourceMappingURL=LoginView.vue.js.map