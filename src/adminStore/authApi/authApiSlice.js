import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authLoginApi, authLogoutApi, forgotPasswordApi } from "./authApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: null,
  token : []
};

export const AuthLogin = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await authLoginApi(credentials);
      return response; // Assuming `response` contains token or user data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const AuthLogout = createAsyncThunk(
  "auth/logout",
  async (credentials, thunkAPI) => {
    try {
      const response = await authLogoutApi();
      return response; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//post forgot password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (data, thunkAPI) => {
    try {
      const response = await forgotPasswordApi(data);
      return response; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
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
      })
      //Logout
      .addCase(AuthLogout.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(AuthLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(AuthLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       //forgot-password
       .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.token = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  
  },
});

export default authSlice.reducer;
