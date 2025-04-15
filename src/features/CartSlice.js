import { createSlice } from '@reduxjs/toolkit';

const initialState = {
items: [],
};

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
  addToCart: (state, action) => {
    const item = state.items.find(i => i.id === action.payload.id);
    if (item) {
      item.quantity += 1;
    } else {
      state.items.push({ ...action.payload, quantity: 1 });
    }
  },
  removeFromCart: (state, action) => {
    state.items = state.items.filter(i => i.id !== action.payload);
  },
  increaseQuantity: (state, action) => {
    const item = state.items.find(i => i.id === action.payload);
    if (item) item.quantity += 1;
  },
  decreaseQuantity: (state, action) => {
    const item = state.items.find(i => i.id === action.payload);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  },
  clearAll: (state) => {
    state.items = [];
  },
},
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
