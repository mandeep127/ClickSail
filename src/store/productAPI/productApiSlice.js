import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCartApi, detailsApi, productApi } from "./productApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: "",
  productDetails: null,
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

export const productDetail = createAsyncThunk(
  "products/productDetail",
  async (productId, thunkAPI) => {
    try {
      const response = await detailsApi(productId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addCart = createAsyncThunk(
  "products/addcart",
  async (productId, thunkAPI) => {
    try {
      const response = await addCartApi(productId);
      return response.data;
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
      })
      .addCase(productDetail.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(productDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(productDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCart.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
