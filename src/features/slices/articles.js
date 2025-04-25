import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticlesStatus",
  async () => {
    const res = await axios.get("http://localhost:8000/articles");
    const articles = res.data;
    return articles;
  }
);
const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
export default articlesSlice.reducer;
