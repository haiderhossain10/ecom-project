import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import productSlice from "../features/productSlice";
import siteInfoSlice from "../features/siteInfoSlice";

export default configureStore({
    reducer: {
        product: productSlice,
        info: siteInfoSlice,
        auth: authSlice,
    },
});
