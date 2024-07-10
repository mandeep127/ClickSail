
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./authAPI/authApiSlice";
import categoriesReducer from "./homeAPI/homeApiSlice";
import productsReducer from "./productAPI/productApiSlice";
import authReducer from "../adminStore/authApi/authApiSlice";
import userReducer from "../adminStore/userApi/userApiSlice";
import categoryReducer from "../adminStore/categoriesApi/categoriesApiSlices";
import subcategoryReducer from "../adminStore/subCategoriesApi/subcategoriesApiSlice";
import productReducer from "../adminStore/productApi/productApiSlice";
import salesReducer from "../adminStore/salesApi/salesApiSlice";
import dashboardReducer from "../adminStore/dashboardApi/dashboardApiSlice";

export const store = configureStore({
  reducer: {
    //front-end
    
      users: loginReducer,
      categories: categoriesReducer,
      products: productsReducer,
    
//back-end
    auth: authReducer,
    user :userReducer,
    category : categoryReducer,
    subcategory : subcategoryReducer,
    product : productReducer,
    sales : salesReducer,
    dashboard : dashboardReducer
  },
});

