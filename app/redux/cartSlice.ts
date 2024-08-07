import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartType } from '~/types/cart';
import { FoodType } from '~/types/food';

const initialState: CartType = {
  items: [],
  addedItems: [],
  total: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ foodItem: FoodType }>) => {
      const { price, foodId } = action.payload.foodItem;

      const existingItem = state.addedItems.find(
        (item) => item.foodId === foodId
      );

      const newTotal = price ? state.total + price : state.total;

      if (existingItem) {
        existingItem.count += 1;
        existingItem.price = existingItem.price ?? 0;
        const validPrice = price ?? 0;
        existingItem.price += validPrice;
        state.items = [...state.items, existingItem];
        state.total = newTotal;
        return;
      }

      const addNewItem: CartItem = {
        count: 1,
        ...action.payload.foodItem,
      };

      state.addedItems = [...state.addedItems, addNewItem];
      state.items = [...state.items, action.payload.foodItem];
      state.total = newTotal;
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const itemToRemove = state.addedItems.find((item) => item.foodId === id);
      const validPrice = itemToRemove?.price ?? 0;

      const updateItems: FoodType[] = state.items.filter(
        (foodItem) => foodItem.foodId !== id
      );
      const updateAddedItems: CartItem[] = state.addedItems.filter(
        (foodItem) => foodItem.foodId !== id
      );
      const newTotal =
        validPrice && state.total > 0 ? state.total - validPrice : state.total;
      state.items = updateItems;
      state.addedItems = updateAddedItems;
      state.total = newTotal;
    },

    toggleSlider: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    removeAllItems: (state) => {
      state.items = [];
      state.addedItems = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, toggleSlider, removeAllItems } =
  cartSlice.actions;

export default cartSlice.reducer;
