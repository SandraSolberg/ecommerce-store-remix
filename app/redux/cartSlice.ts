import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartType } from '~/types/cart';
import { FoodType } from '~/types/food';

const initialState: CartType = {
  items: [],
  total: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ foodItem: FoodType }>) => {
      const { price } = action.payload.foodItem;
      const newTotal = price
        ? parseFloat((state.total + price).toFixed(2))
        : state.total;
      state.items = [...state.items, action.payload.foodItem];
      state.total = newTotal;
    },

    removeItem: (state, action: PayloadAction<{ foodItem: FoodType }>) => {
      const { foodId, price } = action.payload.foodItem;
      const updateItems: FoodType[] = state.items.filter(
        (foodItem) => foodItem.foodId !== foodId
      );
      const newTotal =
        price && state.total > 0 ? state.total - price : state.total;
      state.items = updateItems;
      state.total = newTotal;
    },

    toggleSlider: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { addItem, removeItem, toggleSlider } = cartSlice.actions;

export default cartSlice.reducer;
