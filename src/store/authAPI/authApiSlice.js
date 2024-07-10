import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  forgotPasswordApi,
  loginUserApi,
  logoutUserApi,
  registerUserApi,
} from "./authApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: "",
};

export const Login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUserApi(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const Register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await registerUserApi(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const Logout = createAsyncThunk(
  "user/logout",
  async (credentials, thunkAPI) => {
    try {
      const response = await logoutUserApi(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//forgotPassword
export const ForgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (credentials, thunkAPI) => {
    try {
      const response = await forgotPasswordApi(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(Login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(Register.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(Register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(Register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(Logout.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(Logout.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(Logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //forgotPassword
      .addCase(ForgotPassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(ForgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload.authData;
      })
      .addCase(ForgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectToken = (state) => state.users.authData;

export default loginSlice.reducer;
