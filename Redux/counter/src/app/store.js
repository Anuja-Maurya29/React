import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/CounterSlice.js'
export const counterStore = configureStore({
    reducer:{
        counter:CounterReducer

    },
})