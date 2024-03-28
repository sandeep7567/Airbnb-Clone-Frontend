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
      state.open = true;
    },
    onClose: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClose, onOpen, } = registerModalSlice.actions

export default registerModalSlice.reducer