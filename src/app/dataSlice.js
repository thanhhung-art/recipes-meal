import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    hasErrors: false,
    recipes: [],
};

export const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        fetchRecipes: state => {
            state.loading = true;
        },
        fetchRecipesSuccess: (state, { payload }) => {
            state.recipes = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        fetchRecipesFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    }
});

export const { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure } = recipesSlice.actions;

export const recipesSelector = state => state.recipes;

export default recipesSlice.reducer;

export function getRecipes() {
    return async dispatch => {
        dispatch(fetchRecipes());

        await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then( res => res.json())
            .then(data => dispatch(fetchRecipesSuccess(data.meals)))
            .catch(err => {
                dispatch(fetchRecipesFailure());
                console.log(err);
            });
    }
}