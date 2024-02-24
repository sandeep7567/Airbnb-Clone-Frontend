import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface searchModalState {
  open: boolean;
  step: number;
}

export enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const initialState: searchModalState = {
  open: false,
  step: STEPS.LOCATION,
};

export const searchModalSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.open = true;
    },
    onClose: (state) => {
      state.open = false;
    },
    incrementStep: (state) => {
      state.step += 1;
    },
    decrementStep: (state) => {
      state.step -= 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClose, onOpen, setStep, incrementStep, decrementStep } =
  searchModalSlice.actions;

export default searchModalSlice.reducer;
