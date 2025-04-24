import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import pByCatReducer from "./slices/productsByCat";
import productReducer from "./slices/productById";
import brandsReducer from "./slices/brands";
import pByBrandReducer from "./slices/productsByBrand";

const store = configureStore({
  reducer: {
    categoriesReducer,
    pByCatReducer,
    productReducer,
    brandsReducer,
    pByBrandReducer
  },
});

export default store;
