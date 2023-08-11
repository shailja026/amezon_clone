import { createSlice } from "@reduxjs/toolkit";

export const amazonSlice = createSlice({
  name: "amazon",
  initialState: {
    card: [],
    amount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.card.push(action.payload);
    },
    removeProducts: (state, action) => {
      state.card = state.card.filter((el) => el.id !== action.payload.id);
    },

    totalAmount: (state, action) => {
      state.card.push(action.payload);
      state = action.payload.card;
      console.log("shailja", state);
      console.log(action);

      const total = state.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    //   return total;

      console.log(total)
    },
  },
});
export const { addToCart, removeProducts, totalAmount } = amazonSlice.actions;
export default amazonSlice.reducer;
