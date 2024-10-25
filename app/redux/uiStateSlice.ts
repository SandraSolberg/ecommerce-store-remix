import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavoriteType, ModalStateType } from '~/types/types';

type uiStateType = {
  modal: ModalStateType | null;
  showConfirmation: boolean;
  favorites: FavoriteType[];
};

const initialState: uiStateType = {
  modal: null,
  showConfirmation: false,
  favorites: [],
};

export const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalStateType | null>) => {
      state.modal = action.payload;
    },

    onCloseModal: (state) => {
      state.modal = null;
    },

    setShowConfirmation: (state, action: PayloadAction<boolean>) => {
      state.showConfirmation = action.payload;
    },

    addToFavorites: (state, action: PayloadAction<FavoriteType>) => {
      const newItem: FavoriteType = action.payload;
      const existingItem = state.favorites.find(
        (fav) => fav.id === action.payload.id
      );

      if (existingItem) {
        return;
      }

      state.favorites.push(newItem);
    },
    removeFromFavorites: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const existingItem = state.favorites.filter((item) => item.id !== id);

      state.favorites = existingItem;

      return;
    },
  },
});

export const {
  setModal,
  onCloseModal,
  setShowConfirmation,
  addToFavorites,
  removeFromFavorites,
} = uiStateSlice.actions;

export default uiStateSlice.reducer;
