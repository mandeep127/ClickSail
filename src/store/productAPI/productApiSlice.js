import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "./productApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: "",
};

export const product = createAsyncThunk(
  "shop/products",
  async (credentials, thunkAPI) => {
    try {
      const response = await productApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(product.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(product.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(product.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
