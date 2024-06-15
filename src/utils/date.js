export const timestampToDate = (timestamp) => new Date(timestamp);
export const dateToTimestamp = (date) => date.getTime();
export const defferenceInDays = (date1, date2) => {
    const diff = date1.getTime() - date2.getTime();
    return diff / (1000 * 60 * 60 * 24);
};
//# sourceMappingURL=date.js.map