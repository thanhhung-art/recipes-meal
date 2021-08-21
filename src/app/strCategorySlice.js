import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    strCategory: ""
};

export const strCategorySlice = createSlice({
    name: "strCategory",
    initialState,
    reducers: {
        getStrCategory: (state, {payload}) => {
            state.strCategory = payload;
        }
    }
});

export const {getStrCategory} = strCategorySlice.actions;

export const strCategorySelector = state => state.strCategory;

export default strCategorySlice.reducer;