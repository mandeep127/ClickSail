import { createAsyncThunk } from "@reduxjs/toolkit";
import { authLoginApi } from "./authApiServices";
import thunk from 'redux-thunk';


const intialState={
    loading:false,
    error:'',
    authData:''
}

export const AuthLogin = createAsyncThunk(
    'todos/fetchTodos',
    async (payload, thunkAPI) => {
      console.log('process', )

      const data ={email:"rajat@yopmail.com",password:"1234567"}

      const response = authLoginApi(data);
      console.log('response', response)
      return response.data;
      //return payload; 
    }
  );

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { authLoginApi } from './authApiServices';

// const initialState = {
//   loading: false,
//   error: null,
//   isAuthenticated: false,
// };

// export const AuthLogin = createAsyncThunk(
//   'auth/login',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await authLoginApi(formData);
//       localStorage.setItem('token', response.token); // assuming your API returns a token
//       return response; // data returned from API call
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data); // handle error case
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     // additional reducers can be defined here if needed
//   },
//   extraReducers: {
//     [AuthLogin.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [AuthLogin.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.error = null;
//       state.isAuthenticated = true;
//       // additional state updates can be done here based on the response
//     },
//     [AuthLogin.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload ? action.payload.message : 'Unknown error';
//       state.isAuthenticated = false;
//     },
//   },
// });

// export default authSlice.reducer;
