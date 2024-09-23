import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartType } from '~/types/cart';
import { IFoodItem } from '~/types/food';

const initialState: CartType = {
  addedItems: [],
  total: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ foodItem: IFoodItem }>) => {
      const { foodItem } = action.payload;
      const { price, foodId } = foodItem;

      const existingItem = state.addedItems.find(
        (item) => item.foodId === foodId
      );

      if (existingItem) {
        existingItem.count += 1;
        existingItem.price += price;
        state.total += price;
        return;
      }

      const addNewItem: CartItem = {
        count: 1,
        ...action.payload.foodItem,
      };
      state.addedItems = [...state.addedItems, addNewItem];
      state.total += price;
      return;
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const itemToRemove = state.addedItems.find((item) => item.foodId === id);
      const validPrice = itemToRemove?.price ?? 0;

      const updateAddedItems: CartItem[] = state.addedItems.filter(
        (foodItem) => foodItem.foodId !== id
      );
      const newTotal =
        validPrice && state.total > 0 ? state.total - validPrice : state.total;

      state.addedItems = updateAddedItems;
      state.total = newTotal;
    },

    toggleSlider: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    removeAllItems: (state) => {
      state.addedItems = [];
      state.total = 0;
    },
    removeByOne: (
      state,
      action: PayloadAction<{
        foodId: number;
        originalPrice: number;
        currentNumber: number;
      }>
    ) => {
      const { foodId, originalPrice, currentNumber } = action.payload;

      const existingItem = state.addedItems.find(
        (item) => item.foodId === foodId
      );

      const updatedItems: CartItem[] = state.addedItems.filter(
        (foodItem) => foodItem.foodId !== foodId
      );

      if (existingItem) {
        if (currentNumber === 0) {
          state.addedItems = updatedItems;
          state.total = state.total ? state.total - originalPrice : 0;
          return;
        } else {
          existingItem.count -= 1;
          existingItem.price -= originalPrice;
          state.total -= originalPrice;
          return;
        }
      }
    },
    changeNumberOfItems: (
      state,
      action: PayloadAction<{
        foodId: number;
        originalPrice: number;
        currentCount: number;
      }>
    ) => {
      const { foodId, originalPrice, currentCount } = action.payload;
      const existingItem = state.addedItems.find(
        (item) => item.foodId === foodId
      );

      const updatedItems: CartItem[] = state.addedItems.filter(
        (foodItem) => foodItem.foodId !== foodItem.foodId
      );

      if (existingItem) {
        if (currentCount <= 0) {
          state.addedItems = updatedItems;
          state.total = state.addedItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            0
          );
        } else {
          existingItem.count = currentCount;
          existingItem.price = currentCount * originalPrice;
          state.total = state.addedItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            0
          );
          return;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  removeByOne,
  toggleSlider,
  removeAllItems,
  changeNumberOfItems,
} = cartSlice.actions;

export default cartSlice.reducer;
