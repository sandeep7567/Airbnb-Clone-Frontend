import { configureStore } from '@reduxjs/toolkit'
import loginModalSlice from './slice/modal-login-slice';
import registerModalSlice from './slice/modal-register-slice';
import searchModalSlice from './slice/modal-search-slice';
import authenticationSlice from './slice/authentication-slice';

export const store = configureStore({
  reducer: {
    // Slice
    loginModal: loginModalSlice,
    registerModal: registerModalSlice,
    searchModal: searchModalSlice,
    authentication: authenticationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch