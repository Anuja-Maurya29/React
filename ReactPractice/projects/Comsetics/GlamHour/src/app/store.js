import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productSlice'
import userReducer from "../features/userSlice"

export const makeupStore = configureStore({
    reducer:{
        products:productsReducer,
        auth:userReducer
    
    },
})