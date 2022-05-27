import { createSlice } from "@reduxjs/toolkit";

const siteInfoSlice = createSlice({
    name: "siteInfo",
    initialState: {
        info: [],
    },
    reducers: {
        updateSiteInfo: (state, action) => {
            state.info = action.payload;
        },
    },
});

export const { updateSiteInfo } = siteInfoSlice.actions;
export default siteInfoSlice.reducer;
