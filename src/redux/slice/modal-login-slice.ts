import { createSlice } from '@reduxjs/toolkit';

export interface loginModalState {
  open: boolean;
};

const initialState: loginModalState = {
  open: false,
};

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    onOpen: (state) => {
      state.open = true;
    },
    onClose: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClose, onOpen, } = loginModalSlice.actions

export default loginModalSlice.reducer