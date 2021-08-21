import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    loading: false,
    error: false
};

export const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchCategories: state => {
            state.loading = true;
            state.error = false;
        },
        fetchCategoriesSuccess: (state, { payload }) => {
            state.categories = payload;
            state.loading = false;
        },
        fetchCategoriesFailure: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export const { fetchCategories, fetchCategoriesSuccess, fetchCategoriesFailure } = categorySlice.actions;

export const categoriesSelector = state => state.categories;

export default categorySlice.reducer;

export function getCategories() {
    return async dispatch => {
        dispatch(fetchCategories());

        await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => dispatch(fetchCategoriesSuccess(data.categories)))
            .catch(err => {
                console.log(err);
                dispatch(fetchCategoriesFailure());
            });
    }
}