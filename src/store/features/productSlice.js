import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [
            {
                id: 1,
                name: "Product 1",
                price: 100,
                description: "This is product 1",
                image: "https://picsum.photos/201",
                quantity: 1,
            },
            {
                id: 2,
                name: "Product 2",
                price: 300,
                description: "This is product 2",
                image: "https://picsum.photos/202",
                quantity: 1,
            },
            {
                id: 3,
                name: "Product 3",
                price: 300,
                description: "This is product 3",
                image: "https://picsum.photos/203",
                quantity: 1,
            },
        ],
        addedCart: [],
        totalPrice: 0,
        fee: 15,
        subTotal: 0,
        Shipping: 150,
    },
    reducers: {
        setProduct: () => {},
        updateQuantity: (state, action) => {
            state.products = state.products.filter((item) => {
                return parseInt(item.id) === parseInt(action.payload.id)
                    ? (item.quantity = action.payload.quan)
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
                const subTotal = (state.totalPrice * state.fee) / 100;
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
                    return parseInt(item.id) === parseInt(action.payload.id)
                        ? (isAdded = true)
                        : null;
                });
                if (!isAdded) {
                    state.addedCart = [...state.addedCart, action.payload];

                    // total price calculation
                    const totalPrice =
                        state.totalPrice +
                        action.payload.price * action.payload.quantity;
                    state.totalPrice = totalPrice;

                    // subtotal calculation
                    const subTotal = (state.totalPrice * state.fee) / 100;
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
