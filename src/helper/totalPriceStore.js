export const totalPriceStore = (subTotal, shipping) => {
    const total = subTotal + shipping;
    window.localStorage.setItem("totalPrice", total);
};

export const removePriceStore = () => {};
