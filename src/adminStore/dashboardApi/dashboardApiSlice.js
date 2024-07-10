import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dashboardApi } from "./dashboardApiService";

const initialState = {
  loading: false,
  error: "",
  data: [],
  
};

export const dashboardData = createAsyncThunk(
  "dashboard/fetchDashData",
  async (data, thunkAPI) => {
    try {
      const response = await dashboardApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const dashSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(dashboardData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(dashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(dashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export default dashSlice.reducer;
