import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductByBrand = createAsyncThunk(
  "productBrands/getProductByBrandStatus",
  async ({ brandName }) => {
    const res = await axios.get(
      `http://localhost:8000/products?brand=${brandName}`
    );
    const data = res.data;
    return data;
  }
);

const pByBrandSlice = createSlice({
  name: "productBrands",
  initialState: {
    productBrands: [],
    status: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductByBrand.fulfilled, (state, action) => {
      state.productBrands = action.payload;
      state.status = "success";
    });
    builder.addCase(getProductByBrand.pending, (state) => {
      state.status = "loading";
    });
  },
});

export default pByBrandSlice.reducer;
