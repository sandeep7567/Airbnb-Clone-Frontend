import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerThunk } from "../thunks/authentication";
import { UserI } from "@/types";

export interface authenticationState {
  loading: string;
  message: string | null;
  data: UserI | null;
  success: boolean;
}

const initialState: authenticationState = {
  loading: "idle",
  message: null,
  data: null,
  success: false,
};

export const authenticationSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {

    isAuth: (state, {payload}) => {
      state.loading = "idle";
      state.message = "login success!";
      state.data = payload;
      state.success = true;
    },

    logout : (state) => {
      return { ...state }
    },

    reset: (state) => {
      state.loading = "idle";
      state.message = null;
      state.data = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(registerThunk.fulfilled, (state, action: PayloadAction<any>) => {
        console.log(action.payload.data);
        state.loading = "fulfilled";
        state.message = action.payload.message || "register success!";
        state.data = action.payload.data;
        state.success = action.payload.success || true;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.loading = "rejected";
      });
  },
});

// Action creators are generated for each case reducer function
export const { isAuth, logout, reset } = authenticationSlice.actions;

export default authenticationSlice.reducer;
