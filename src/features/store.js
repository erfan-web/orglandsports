import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import pByCatReducer from "./slices/productsByCat";
import productReducer from "./slices/productById";
import brandsReducer from "./slices/brands";
import pByBrandReducer from "./slices/productsByBrand";
import cartReducer from "./slices/cart";
import articlesReducer from "./slices/articles";
import articleReducer from "./slices/article";
import productsReducer from "./slices/products";

const store = configureStore({
  reducer: {
    categoriesReducer,
    pByCatReducer,
    productReducer,
    brandsReducer,
    pByBrandReducer,
    cartReducer,
    articlesReducer,
    articleReducer,
    productsReducer,
  },
});

export default store;
