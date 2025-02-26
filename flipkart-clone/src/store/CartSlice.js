import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addNewItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    placeOrder: (state, action) => {
      return (state = []);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = quantity;
        state[itemIndex].totalPrice = state[itemIndex].price * quantity;
      }
    },
  },
});

export const { addNewItem, removeItem, placeOrder, updateItemQuantity } =
  CartSlice.actions;

export default CartSlice;
