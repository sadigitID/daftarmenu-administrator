export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
export const lowerCase = (str) => str.toLowerCase();
export const upperCase = (str) => str.toUpperCase();
export const reverse = (str) => str.split('').reverse().join('');
export const replace = (str, searchValue, replaceValue) => str.replace(searchValue, replaceValue);
export const split = (str, separator) => str.split(separator);
export const join = (arr, separator) => arr.join(separator);
export const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
export const formatNumber = (amount) => {
    return amount.toLocaleString('en-US');
};
export const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};
export const isPasswordValid = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
};
export const isNameValid = (name) => {
    const re = /^[a-zA-Z\s]*$/;
    return re.test(name);
};
export const isPhoneValid = (phone) => {
    const re = /^[0-9]*$/;
    return re.test(phone);
};
export const isUrlValid = (url) => {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(url);
};
export const isImageValid = (image) => {
    const re = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    return re.test(image);
};
//# sourceMappingURL=text.js.map