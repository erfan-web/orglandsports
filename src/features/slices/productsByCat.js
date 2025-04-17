import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsByCategory = createAsyncThunk(
  "ProductsByCat/getProductsByCategoryStatus",
  async ({ categoryId }) => {
    const res = await axios.get(
      `http://localhost:8000/products?category_id=${categoryId}`
    );
    const Products =  res.data.sort((a, b) => {
      if (a.price === null && b.price !== null) return 1;
      if (b.price === null && a.price !== null) return -1;
      return b.id - a.id;
    });
    return { Products, categoryId };
  }
);

const ProductsByCatSlice = createSlice({
  name: "ProductsByCat",
  initialState: {
    allProducts: {},
    filteredProducts: [],
    status:false
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.status = "loading";
    });
    //حالت اولیه وقتی رندر میشه کامپوننت مقدار کفش های فیلتر شده و تمام کفش ها پیلود یا همون تمام محصولاتمون هست
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      const { Products, categoryId } = action.payload;
      state.status = "succeeded";
      state.allProducts[categoryId] = Products;
      state.filteredProducts = Products;
    });
    builder.addCase(getProductsByCategory.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export default ProductsByCatSlice.reducer;

