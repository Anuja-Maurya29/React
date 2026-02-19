import {configureStore} from '@reduxjs/toolkit'
import  AddReducer  from '../features/AddReducer'
export const AdminStore = configureStore({
    reducer:{
       Users:AddReducer,
       
    },
})