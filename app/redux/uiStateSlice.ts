import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ModalStateType } from '~/types/types';

type uiStateType = {
  modal: ModalStateType | null;
};

const initialState: uiStateType = {
  modal: null,
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
  },
});

export const { setModal, onCloseModal } = uiStateSlice.actions;

export default uiStateSlice.reducer;
