import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ModalStateType } from '~/types/types';

type uiStateType = {
  modal: ModalStateType | null;
  showConfirmation: boolean;
};

const initialState: uiStateType = {
  modal: null,
  showConfirmation: false,
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
  },
});

export const { setModal, onCloseModal, setShowConfirmation } =
  uiStateSlice.actions;

export default uiStateSlice.reducer;
