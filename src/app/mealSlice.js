import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
};

export const mealSlice = createSlice({
    name: "mealId",
    initialState,
    reducers: {
        getMealId: (state, {payload}) => {
            state.id = payload;
        }
    }
});

export const {getMealId} = mealSlice.actions;

export const mealIdSelector = state => state.mealId;

export default mealSlice.reducer;