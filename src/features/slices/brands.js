import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk(
  "brands/fetchBrandsStatus",
  async () => {
    const res = await axios.get(`https://orgland-sports.vercel.app/api/brands`);
    const brands = res.data;
    return brands;
  }
);

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    allBrands: [],
    status: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.allBrands = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBrands.pending, (state) => {
      state.status = "loading";
    });
  },
});
export default brandsSlice.reducer;
