import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../api/apiService";
import { USER } from "../../data/constants";
import { UserI } from "@/types";

export const registerThunk = createAsyncThunk(
  "register/api",
  async (formData: UserI, thunkAPI) => {
    try {
      // Make a POST request using apiService.post
      const { data } = await apiService.mutation(
        "POST",
        `${USER.COMMON_API}/${USER.REGISTER_API}`,
        formData
      );

      return data; // Return the response
    } catch (error: any) {
      // Handle any errors
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
