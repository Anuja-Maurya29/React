import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[],
    loggedInUser:{
        email:"",
        password:""
    }
}
 export const userSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        addNewUser:(state,action)=>{
            state.users.push(action.payload)

        }
      

    }


})

export const{addNewUser}=userSlice.actions
export default userSlice.reducer