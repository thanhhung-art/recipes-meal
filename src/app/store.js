import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./dataSlice";
import categoriesReducer from "./categorySlice";
import mealIdReducer from "./mealSlice";
import strCategoryReducer from "./strCategorySlice";

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        categories: categoriesReducer,
        mealId: mealIdReducer,
        strCategory: strCategoryReducer
    }
});