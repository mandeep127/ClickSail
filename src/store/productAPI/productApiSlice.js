import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCartApi,
  checkoutApi,
  detailsApi,
  paymentCallbackApi,
  paymentStatusApi,
  productApi,
  removeCartApi,
  showCartApi,
} from "./productApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: "",
  productDetails: "",
  addProduct: "",
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
      return response?.data;
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
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const showCart = createAsyncThunk(
  "products/showcart",
  async (productId, thunkAPI) => {
    try {
      const response = await showCartApi(productId);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "products/removecart",
  async (productId, thunkAPI) => {
    try {
      const response = await removeCartApi(productId);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const CheckoutPage = createAsyncThunk(
  "products/checkout",
  async (productId, thunkAPI) => {
    try {
      const response = await checkoutApi(productId);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//paymentStatusApi
export const PaymentStatus = createAsyncThunk(
  "payment/status",
  async (productId, thunkAPI) => {
    try {
      const response = await paymentStatusApi(productId);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Razorpay payment callback
export const RazorpayCallback = createAsyncThunk(
  "razorpay/callback",
  async (productId, thunkAPI) => {
    try {
      const response = await paymentCallbackApi(productId);
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
        state.addProduct = action.payload;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showCart.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(showCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(showCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CheckoutPage.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(CheckoutPage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(CheckoutPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //paymentStatusApi
      .addCase(PaymentStatus.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(PaymentStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(PaymentStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Razorpay payment callback
      .addCase(RazorpayCallback.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(RazorpayCallback.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.productDetails = action.payload;
      })
      .addCase(RazorpayCallback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
