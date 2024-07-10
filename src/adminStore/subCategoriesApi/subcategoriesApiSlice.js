import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  subcategoriesListApi,
  subcategoriesAddApi,
  subcategoriesStatusApi,
  subCategoryEditGetApi,
  subCategoryEditPostApi,
  subCategoryDeleteApi,
} from "./subcategoriesApiServices";

const initialState = {
  loading: false,
  error: "",
  subcategories: [],
  subcategory: [],
};

//list
export const subcategoriesList = createAsyncThunk(
  "admin/fetchSubCategories",
  async (data, thunkAPI) => {
    try {
      const response = await subcategoriesListApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//add
export const addSubCategory = createAsyncThunk(
  "admin/addSubCategory",
  async (data, thunkAPI) => {
    try {
      const response = await subcategoriesAddApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data ?? "Failed to add user"
      );
    }
  }
);

//status
export const subcategoriesStatus = createAsyncThunk(
  "admin/fetchCategoryStatus",
  async (data, thunkAPI) => {
    try {
      const response = await subcategoriesStatusApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//edit get
export const subCategoryEditGet = createAsyncThunk(
  "admin/subCategoryEditGet",
  async (data, thunkAPI) => {
    try {
      const response = await subCategoryEditGetApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//edit post
export const subCategoryEditPost = createAsyncThunk(
  "admin/subCategoryEditPost",
  async (data, thunkAPI) => {
    try {
      const response = await subCategoryEditPostApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//delete
export const subCategoryDelete = createAsyncThunk(
  "admin/subCategoryDelete",
  async (data, thunkAPI) => {
    try {
      const response = await subCategoryDeleteApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const subcategoriesSlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(subcategoriesList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(subcategoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.subcategories = action.payload;
      })
      .addCase(subcategoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  //add
      .addCase(addSubCategory.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addSubCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.subcategories = action.payload;
      })
      .addCase(addSubCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //status
      .addCase(subcategoriesStatus.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(subcategoriesStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.subcategories = action.payload;
      })
      .addCase(subcategoriesStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //edit get
      .addCase(subCategoryEditGet.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(subCategoryEditGet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.subcategory = action.payload;
      })
      .addCase(subCategoryEditGet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

   //edit post
      .addCase(subCategoryEditPost.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(subCategoryEditPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.subcategory = action.payload;
      })
      .addCase(subCategoryEditPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //delete
      .addCase(subCategoryDelete.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(subCategoryDelete.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.subcategory = action.payload;
      })
      .addCase(subCategoryDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subcategoriesSlice.reducer;
