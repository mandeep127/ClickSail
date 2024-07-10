import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./authAPI/authApiSlice";
import categoriesReducer from "./homeAPI/homeApiSlice";
import productsReducer from "./productAPI/productApiSlice";

export const store = configureStore({
  reducer: {
    users: loginReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});
