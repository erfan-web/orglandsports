import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async () => {
    const res = await axios.get(`/api/products`);
    const products = res.data;
    return products;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;

      state.status = "success";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
  },
});
export default productsSlice.reducer;
