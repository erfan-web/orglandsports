import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    addedToCart: 0,
    addedToProduct: [],
    total: 0,
    isExisting: true,
    selectedSize:null
  },
  reducers: {
    addToCart: (state, action) => {
      let { id, price, discount ,size} = action.payload;
      if (state.addedToProduct.some((p) => p.id == id && p.size == size)) {
        state.isExisting = false;
      } else {
        state.isExisting = true;
        price = discount ? discount : price;
        state.total += price;
        state.addedToCart += 1;
        state.addedToProduct.push({
          ...action.payload,
          count: 1,
          totalPrice: price,
        });
      }
      
    },
    deleteFromCart: (state, action) => {
      const { id, size, price } = action.payload;
      state.total -= price;
      state.addedToCart -= 1;
      const filteredProducts = state.addedToProduct.filter(
        (p) => !(p.id === id && p.size === size)
      );
      state.addedToProduct = filteredProducts;
    },
  },
});
export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
