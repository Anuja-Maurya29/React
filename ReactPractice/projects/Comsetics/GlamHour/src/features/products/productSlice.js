import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
    status:"empty"

}

export const productSlice =createSlice({
    name:"products",
    initialState,
    reducers:{
        addProducts:(state,action)=>{
            state.products=action.payload

        },
        setStatus:(state,action)=>{
            state.status=action.payload

        },
      

    },
})

export const {addProducts,setStatus}=productSlice.actions
export default productSlice.reducer