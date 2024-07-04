import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authApi/authApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

