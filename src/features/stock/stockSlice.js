import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: [],
  totalRevenue: 0,
  totalExpense: 0,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addStock: (state, action) => {
      const existingItem = state.stock.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.stock.push(action.payload);
      }
      state.totalExpense += action.payload.quantity * action.payload.cost;
      console.log(state.totalExpense+"abcd");
    },
    removeStock: (state, action) => {
      const itemIndex = state.stock.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        if (state.stock[itemIndex].quantity > action.payload.quantity) {
          state.stock[itemIndex].quantity -= action.payload.quantity;
        } else {
          state.stock.splice(itemIndex, 1);
        }
      }
      state.totalRevenue += action.payload.quantity * action.payload.cost;
    },
  },
});

export const { addStock, removeStock } = stockSlice.actions;
export default stockSlice.reducer;
