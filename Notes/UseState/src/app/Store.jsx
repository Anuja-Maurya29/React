import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/CounterSlice";

export const myStore = configureStore({
    reducer:{
        count:CounterReducer,

    },
})