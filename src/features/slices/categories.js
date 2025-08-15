import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategoriesStatus",
  async () => {
    const res = await axios.get("https://orgland-sports.vercel.app/api/categories");
    const categories = res.data;
    return categories;
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    currentCategories: [],
    parentCategories: [],
    subCategories: [],
    status: false,
    categoriesLoaded: false,
  },
  reducers: {
    setParentCategories: (state) => {
      state.parentCategories = state.categories.filter(
        (cat) => cat.parent_id == null
      );
    },
    setCurrentCategory: (state, action) => {
      state.currentCategories = state.categories.find(
        (cat) => cat.id == action.payload
      );
    },
    setSubCategories: (state, action) => {
      state.subCategories = state.categories.filter(
        (cat) => cat.parent_id == action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.status = "success";
      state.categoriesLoaded = true;
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "loading";
    });
  },
});
export const { setParentCategories, setSubCategories, setCurrentCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
