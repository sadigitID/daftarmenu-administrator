import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useRestoStore = defineStore('account', () => {
    const resto = ref(null);
    return {
        resto
    };
});
//# sourceMappingURL=resto.js.map