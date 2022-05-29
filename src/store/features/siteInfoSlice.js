import { createSlice } from "@reduxjs/toolkit";

const siteInfoSlice = createSlice({
    name: "siteInfo",
    initialState: {
        info: [],
        userInfo: [],
    },
    reducers: {
        updateSiteInfo: (state, action) => {
            state.info = action.payload;
        },
        updateUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});

export const { updateSiteInfo, updateUserInfo } = siteInfoSlice.actions;
export default siteInfoSlice.reducer;
