import {createSlice} from "@reduxjs/toolkit"

const initialState={
    dataList:[]
}
 export const AddReducer = createSlice({
    name:"Users",
    initialState,
    reducers:{
        addUser:(state,action)=>{(


         state.dataList.push(action.payload)
        )},

        deleteUser:(state,action)=>{(
            state.dataList=state.dataList.filter((name,index)=>index!=action.payload)
        )
        },
       
    }

})

 export const {addUser,deleteUser} = AddReducer.actions
 export default AddReducer.reducer
