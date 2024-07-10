import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productListApi, productAddApi, productStatusApi, productEditGetApi, productEditPostApi, productDeleteApi} from "./productApiServices";

const initialState = {
    loading: false,
    error: "",
    products: [],
    product: []
  };

export const productList = createAsyncThunk(
    "admin/fetchProducts",
    async (data, thunkAPI) => {
      try {
        const response = await productListApi(data); 
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  
  export const  addProduct = createAsyncThunk(
    "admin/addProduct",
    async (data, thunkAPI) => {
      try {
        const response = await productAddApi(data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data ?? "Failed to add user"
        );
      }
    }
  );

  export const productStatus = createAsyncThunk(
    "admin/fetchProductStatus",
    async (data, thunkAPI) => {
      try {
        const response = await productStatusApi(data); 
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  //edit get
export const productEditGet = createAsyncThunk(
  "admin/productEditGet",
  async (data, thunkAPI) => {
    try {
      const response = await productEditGetApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//edit post
export const productEditPost = createAsyncThunk(
  "admin/productEditPost",
  async (data, thunkAPI) => {
    try {
      const response = await productEditPostApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//delete
export const productDelete = createAsyncThunk(
  "admin/productDelete",
  async (data, thunkAPI) => {
    try {
      const response = await productDeleteApi(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

  const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {
      builder
        .addCase(productList.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(productList.fulfilled, (state, action) => {
          state.loading = false;
          state.error = "";
          state.products = action.payload; 
        })
        .addCase(productList.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        //add
        .addCase(addProduct.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(addProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.error = "";
          state.products = action.payload; 
        })
        .addCase(addProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

         //status
         .addCase(productStatus.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(productStatus.fulfilled, (state, action) => {
          state.loading = false;
          state.error = "";
          state.products = action.payload; 
        })
        .addCase(productStatus.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })


  //edit get
      .addCase(productEditGet.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(productEditGet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.product = action.payload;
      })
      .addCase(productEditGet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

   //edit post
      .addCase(productEditPost.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(productEditPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.product = action.payload;
      })
      .addCase(productEditPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  //delete
      .addCase(productDelete.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(productDelete.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.product = action.payload;
      })
      .addCase(productDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
  });
  
  export default productSlice.reducer;
