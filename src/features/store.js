import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './slices/categories'
const store = configureStore({
    reducer: {
        categoriesReducer
    },
  });
  
  export default store;
  