import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './slices/categories'
import pByCatReducer from './slices/productsByCat'
const store = configureStore({
    reducer: {
        categoriesReducer,
        pByCatReducer
    },
  });
  
  export default store;
  