import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  changePasswordApi,
  ordersDetailsApi,
  showOrdersApi,
  showUserProfileApi,
  updateUserProfileApi,
} from "./userApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: "",
};

export const orders = createAsyncThunk(
  "user/orders",
  async (credentials, thunkAPI) => {
    try {
      const response = await showOrdersApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//orders details - user panel
export const OrdersDetails = createAsyncThunk(
  "user/orders-details",
  async (credentials, thunkAPI) => {
    try {
      const response = await ordersDetailsApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//show user profile
export const showUserProfile = createAsyncThunk(
  "user/profile",
  async (credentials, thunkAPI) => {
    try {
      const response = await showUserProfileApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//update user profile
export const updateUserProfile = createAsyncThunk(
  "user/update-profile",
  async (credentials, thunkAPI) => {
    try {
      const response = await updateUserProfileApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//change user password
export const changePassword = createAsyncThunk(
  "user/change-password",
  async (credentials, thunkAPI) => {
    try {
      const response = await changePasswordApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orders.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(orders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(orders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // orders details - user profile
      .addCase(OrdersDetails.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(OrdersDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(OrdersDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //show user profile
      .addCase(showUserProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(showUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(showUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //update user profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //change user password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
