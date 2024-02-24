import { createSlice } from '@reduxjs/toolkit';

export interface registerModalState {
  open: boolean;
};

const initialState: registerModalState = {
  open: false,
};

export const registerModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    onOpen: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.open = true;
    },
    onClose: (state) => {
      state.open = false;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.open += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { onClose, onOpen, } = registerModalSlice.actions

export default registerModalSlice.reducer