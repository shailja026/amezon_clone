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
      console.log("shailja gupta");
      console.log(action.payload.card);
      state = action.payload;
      console.log("hs", state);
      let total = state.reduce((acc, curr) => acc + curr.price, 0);
      //console.log(total)
      return total;
    },

    empatyBag: (state, action) => {
      state = [];
      action.payload = [];
    },
  },
});
export const { addToCart, removeProducts, totalAmount, empatyBag } =
  amazonSlice.actions;
export default amazonSlice.reducer;
