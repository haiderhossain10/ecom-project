import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        addedCart: [],
        totalPrice: 0,
        fee: 15,
        subTotal: 0,
        Shipping: 150,
    },
    reducers: {
        setProduct: (state, action) => {
            // console.log(action.payload);
            state.products = action.payload;
        },
        updateQuantity: (state, action) => {
            state.products = state.products.filter((item) => {
                return parseInt(item.product_master_Id) ===
                    parseInt(action.payload.id)
                    ? (item.is_active = action.payload.quan)
                    : item;
            });
        },
        addToCart: (state, action) => {
            // add to cart
            if (state.addedCart.length === 0) {
                state.addedCart.push(action.payload);
                // total price calculation
                const totalPrice =
                    state.totalPrice +
                    action.payload.price * action.payload.quantity;
                state.totalPrice = totalPrice;
                // subtotal calculation
                const subTotal =
                    (state.product_Selling_Price * state.fee) / 100;
                state.subTotal = subTotal;

                // adding the product to localstore
                window.localStorage.setItem(
                    "addedCartItem",
                    JSON.stringify(state.addedCart)
                );
            } else {
                // is cart already have this product
                let isAdded = false;
                state.addedCart.map((item) => {
                    return parseInt(item.product_master_Id) ===
                        parseInt(action.payload.product_master_Id)
                        ? (isAdded = true)
                        : null;
                });
                if (!isAdded) {
                    state.addedCart = [...state.addedCart, action.payload];

                    // total price calculation
                    const totalPrice =
                        state.totalPrice +
                        action.payload.product_Selling_Price *
                            action.payload.is_active;
                    state.totalPrice = totalPrice;

                    // subtotal calculation
                    const subTotal =
                        (state.product_Selling_Price * state.fee) / 100;
                    state.subTotal = subTotal;

                    // adding the product to localstore
                    window.localStorage.setItem(
                        "addedCartItem",
                        JSON.stringify(state.addedCart)
                    );
                } else {
                    alert("Product already added to cart");
                }
            }
        },
        updateLocalstoreCart: (state, action) => {
            state.addedCart = [...action.payload];
        },
    },
});

export const { setProduct, updateQuantity, addToCart, updateLocalstoreCart } =
    productSlice.actions;
export default productSlice.reducer;
