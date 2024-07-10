import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesListApi , categoryAddApi, categoriesStatusApi, categoryEditGetApi, categoryEditPostApi, categoryDeleteApi } from "./categoriesApiService";

const initialState = {
  loading: false,
  error: "",
  categories: [],
  newcategories:[],
  category :[]
};

//list
export const categoriesList = createAsyncThunk(
  "admin/fetchCategories",
  async (data, thunkAPI) => {
    try {
      const response = await categoriesListApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//add
export const addCategory = createAsyncThunk(
  "admin/addCategory",
  async (data, thunkAPI) => {
    try {
      const response = await categoryAddApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data ?? "Failed to add user"
      );
    }
  }
);

//status
export const categoryStatus = createAsyncThunk(
  "users/fetchCategoryStatus",
  async (data, thunkAPI) => {
    try {
      const response = await categoriesStatusApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//get edit
export const categoryEditGet = createAsyncThunk(
  "admin/fetchCategoryEditGet",
  async (data, thunkAPI) => {
    try {
      const response = await categoryEditGetApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//post edit
export const categoryEditPost = createAsyncThunk(
  "admin/fetchCategoryEditPost",
  async (data, thunkAPI) => {
    try {
      const response = await categoryEditPostApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//delete
export const deleteCategory = createAsyncThunk(
  "admin/deleteCategory",
  async (data, thunkAPI) => {
    try {
      const response = await categoryDeleteApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data ?? "Failed to delete user"
      );
    }
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(categoriesList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(categoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.categories = action.payload;
      })
      .addCase(categoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //add user
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.newcategories = action.payload;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //status category
      .addCase(categoryStatus.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(categoryStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.category = action.payload;
      })
      .addCase(categoryStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

   //edit Get
      .addCase(categoryEditGet.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(categoryEditGet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.category = action.payload;
      })
      .addCase(categoryEditGet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //edit Post
      .addCase(categoryEditPost.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(categoryEditPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.category = action.payload;
      })
      .addCase(categoryEditPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //delete
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.category = action.payload;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default categoriesSlice.reducer;
