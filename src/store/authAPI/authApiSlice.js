import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authLoginApi } from "./authApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: null,
};

export const UserLogin = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const response = await authLoginApi(credentials);
      return response; // Assuming `response` contains token or user data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Any synchronous reducers can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthLogin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(AuthLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(AuthLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
