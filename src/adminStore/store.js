import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authApi/authApiSlice";
import userReducer from "./userApi/userApiSlice";
import categoryReducer from "./categoriesApi/categoriesApiSlices";
import subcategoryReducer from "./subCategoriesApi/subcategoriesApiSlice";
import productReducer from "./productApi/productApiSlice";
import salesReducer from "./salesApi/salesApiSlice";
import dashboardReducer from "./dashboardApi/dashboardApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user :userReducer,
    category : categoryReducer,
    subcategory : subcategoryReducer,
    product : productReducer,
    sales : salesReducer,
    dashboard : dashboardReducer
  },
});

