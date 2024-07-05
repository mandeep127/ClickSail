import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactApi, homeApi } from "./homeApiServices";

const initialState = {
  loading: false,
  error: "",
  authData: "",
};

export const welcome = createAsyncThunk(
  "welcome/categories",
  async (credentials, thunkAPI) => {
    try {
      const response = await homeApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const contact = createAsyncThunk(
  "welcome/contact",
  async (credentials, thunkAPI) => {
    try {
      const response = await contactApi(credentials);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(welcome.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(welcome.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(welcome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(contact.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(contact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.authData = action.payload;
      })
      .addCase(contact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default categoriesSlice.reducer;
