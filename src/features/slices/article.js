import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getArticleById = createAsyncThunk(
  "article/getArticleByIdStatus",
  async ({ articleId }) => {
    const res = await axios.get(`https://orgland-sports.vercel.app/api/articles?id=${articleId}`);
    const article = res.data;
    return article;
  }
);
const articleSlice = createSlice({
  name: "article",
  initialState: {
    article: null,
    status: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleById.fulfilled, (state, action) => {
      console.log(action.payload);
      state.article = action.payload;
      state.status = "success";
    });
    builder.addCase(getArticleById.pending, (state) => {
      state.status = "loading";
    });
  },
});
export default articleSlice.reducer;
