import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { uiStateSlice } from './uiStateSlice';

// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    uiState: uiStateSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
