import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import pByCatReducer from "./slices/productsByCat";
import productReducer from "./slices/productById";
const store = configureStore({
  reducer: {
    categoriesReducer,
    pByCatReducer,
    productReducer,
  },
});

export default store;
