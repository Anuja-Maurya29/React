import { configureStore } from "@reduxjs/toolkit";
import CounterSlice  from "../features/CounterSlice";
 export const CounterStore = configureStore({
    reducer:{
        Counter:CounterSlice

    }
})