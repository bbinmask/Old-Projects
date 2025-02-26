import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    initialProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { initialProducts } = productSlice.actions;
export default productSlice;
