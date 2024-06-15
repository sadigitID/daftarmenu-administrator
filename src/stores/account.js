import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { readData, readDataJson, removeData, writeData, writeDataJson } from '@/utils/storage';
export const useAccountStore = defineStore('account', () => {
    const email = ref('');
    const password = ref('');
    const saveEmail = (email) => {
        writeData('email', email);
    };
    const getEmail = () => {
        return readData('email');
    };
    const getAccountData = () => {
        const accountString = readDataJson('account');
        let account = null;
        if (accountString) {
            try {
                account = JSON.parse(accountString);
            }
            catch (error) {
                account = accountString;
            }
        }
        return account;
    };
    const account = ref(getAccountData());
    const isAuthenticated = computed(() => readData('isAuthenticated') == undefined ? false : readData('isAuthenticated') == true);
    const logout = () => {
        removeData('isAuthenticated');
        removeData('account');
        const url = window.location.origin;
        window.location.href = url + '/login';
    };
    const saveAccount = (accountData) => {
        writeData('isAuthenticated', true);
        writeDataJson('account', accountData);
    };
    const setAuthenticated = (value) => {
        writeData('isAuthenticated', value);
    };
    computed(() => {
        account.value = getAccountData();
        return account.value;
    });
    onMounted(() => {
        if (getAccountData() == null) {
            const isAuthenticated = readData('isAuthenticated');
            if (isAuthenticated == true) {
                logout();
            }
        }
        // saveAccount({
        //   name: 'John Doe',
        //   username: 'john.doe',
        //   email: '',
        //   token: ''
        // })
    });
    return {
        isAuthenticated,
        setAuthenticated,
        logout,
        account,
        saveAccount,
        saveEmail,
        getEmail,
        email,
        password
    };
});
//# sourceMappingURL=account.js.map