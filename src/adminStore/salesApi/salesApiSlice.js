import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { salesListApi, transactionsListApi } from "./salesApiService";
import {
  orderProcessingApi,
  orderRejectApi,
  orderShippingApi,
  orderAcceptApi,
} from "./salesApiService";

const initialState = {
  loading: false,
  error: "",
  sales: [],
  transactions:[]
};

export const salesList = createAsyncThunk(
  "admin/fetchOrders",
  async (data, thunkAPI) => {
    try {
      const response = await salesListApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//order processing slice
export const orderProcessing = createAsyncThunk(
  "admin/orderProcessing",
  async (data, thunkAPI) => {
    try {
      const response = await orderProcessingApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// orderRejectApi slice
export const orderReject = createAsyncThunk(
  "admin/orderReject",
  async (data, thunkAPI) => {
    try {
      const response = await orderRejectApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//orderShipping slice
export const orderShipping = createAsyncThunk(
  "admin/orderShipping",
  async (data, thunkAPI) => {
    try {
      const response = await orderShippingApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//order accept slice
export const orderAccept = createAsyncThunk(
  "admin/orderAccept",
  async (data, thunkAPI) => {
    try {
      const response = await orderAcceptApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//transctions
export const transactionList = createAsyncThunk(
  "admin/transactionList",
  async (data, thunkAPI) => {
    try {
      const response = await transactionsListApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(salesList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(salesList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.sales = action.payload;
      })
      .addCase(salesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //orderProcessingApi
      .addCase(orderProcessing.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(orderProcessing.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.sales = action.payload;
      })
      .addCase(orderProcessing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //reject
      .addCase(orderReject.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(orderReject.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.sales = action.payload;
      })
      .addCase(orderReject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //shipping
      .addCase(orderShipping.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(orderShipping.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.sales = action.payload;
      })
      .addCase(orderShipping.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //accept
      .addCase(orderAccept.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(orderAccept.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.sales = action.payload;
      })
      .addCase(orderAccept.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      //transactions
      .addCase(transactionList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(transactionList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(transactionList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default salesSlice.reducer;
