import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProductById = createAsyncThunk(
  "product/getProductByIdStatus",
  async ({ productId }) => {
    const res = await axios.get(
      `http://localhost:8000/products?id=${productId}`
    );
    const product =  res.data[0]
    return product;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    status: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
      state.status = "success";
    });
    builder.addCase(getProductById.pending, (state) => {
      state.status = "loading";
    });
  },
});
export default productSlice.reducer;
