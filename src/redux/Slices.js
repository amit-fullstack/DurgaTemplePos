import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  cartArr: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const { _id, quantity, amount, selectedDate } = action.payload;
      const existingItemIndex = state.cartArr.findIndex(
        (item) => item._id === _id
      );
      if (existingItemIndex !== -1) {
        state.cartArr[existingItemIndex].quantity = quantity || 1;
        state.cartArr[existingItemIndex].amount = amount;
        state.cartArr[existingItemIndex].selectedDate = selectedDate;
      } else {
        state.cartArr.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartArr = state.cartArr.filter(
        (item) => item._id !== itemIdToRemove
      );
    },
  },
});

export const { updateCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
