import { EncryptStorage } from 'encrypt-storage';
const encryptStorage = new EncryptStorage('qwertyuiopasdfghjklzxcvbnm-1234567890');
const writeData = (key, data) => encryptStorage.setItem(key, data);
const writeDataJson = (key, data) => encryptStorage.setItem(key, JSON.stringify(data));
const removeData = (key) => encryptStorage.removeItem(key);
const readData = (key) => {
    try {
        return encryptStorage.getItem(key);
    }
    catch (error) {
        return undefined;
    }
};
const readDataJson = (key) => {
    try {
        return encryptStorage.getItem(key);
    }
    catch (error) {
        return undefined;
    }
};
export { removeData, writeData, writeDataJson, readData, readDataJson };
//# sourceMappingURL=storage.js.map