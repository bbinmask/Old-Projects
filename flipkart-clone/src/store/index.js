import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productSlice from "./productSlice";
import fetchStatusSlice from "./FetchStatusSlice";

export const flipkartStore = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    product: productSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});
