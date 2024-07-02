import { createAsyncThunk } from "@reduxjs/toolkit";
import { authLoginApi } from "./authApiServices";


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