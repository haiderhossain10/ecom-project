export const helperStore = (storeName, data) => {
    return window.localStorage.setItem(storeName, JSON.stringify(data));
};

export const getHelperStore = (storeName) => {
    return JSON.parse(window.localStorage.getItem(storeName));
};

export const checkHelperStore = (storeName) => {
    if (localStorage.getItem(storeName) !== null) {
        return true;
    } else {
        return false;
    }
};

export const removeStoreHandler = (storeName) => {
    return window.localStorage.removeItem(storeName);
};
