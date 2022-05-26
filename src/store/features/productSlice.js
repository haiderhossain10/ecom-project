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
            state.products = action.payload;
        },
        updateQuantity: (state, action) => {
            if (!isNaN(action.payload.quan)) {
                state.products = state.products.filter((item) => {
                    return parseInt(item.product_master_Id) ===
                        parseInt(action.payload.id)
                        ? (item.is_active = action.payload.quan)
                        : item;
                });
            }
        },
        addToCart: (state, action) => {
            // add to cart
            if (state.addedCart.length === 0) {
                alert("Product added to cart");
                state.addedCart.push(action.payload);

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
                        : "";
                });
                if (!isAdded) {
                    alert("Product added to cart");
                    state.addedCart = [...state.addedCart, action.payload];

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
        deleteCartItem: (state, action) => {
            if (action.payload.length === 0) {
                state.addedCart = [];
                window.localStorage.removeItem("addedCartItem");
            } else {
                state.addedCart = action.payload;
                window.localStorage.setItem(
                    "addedCartItem",
                    JSON.stringify(state.addedCart)
                );
            }
        },
        updateFinalQty: (state, action) => {
            state.addedCart.filter((item) => {
                return parseInt(item.product_master_Id) ===
                    parseInt(action.payload.id)
                    ? (item.is_active = action.payload.quan)
                    : item;
            });

            window.localStorage.setItem(
                "addedCartItem",
                JSON.stringify(state.addedCart)
            );
        },
    },
});

export const {
    setProduct,
    updateQuantity,
    addToCart,
    updateLocalstoreCart,
    deleteCartItem,
    updateFinalQty,
} = productSlice.actions;
export default productSlice.reducer;
