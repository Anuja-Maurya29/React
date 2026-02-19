import { createSlice } from "@reduxjs/toolkit";
 const initialState ={
    count:0
}

export const CounterSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        inc(state){
       state.count+=1
        },
        dec(state){
state.count-=1
        }

    }
})

export const {inc , dec} = CounterSlice.actions
export default CounterSlice.reducer