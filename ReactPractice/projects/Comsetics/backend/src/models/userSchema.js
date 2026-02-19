import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"],
        min:[3,"Name should contain atlest 3 chars"],
        max:[15,"name sholud not be more than 15 char"],
        trim:true

    },
    lastName:{
        type:String,
        required:[true,"Last name is required"],
         min:[3,"Name should contain atlest 3 chars"],
        max:[15,"name sholud not be more than 15 char"],
        trim:true

    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id already exist"],
        lowecase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required"]

    },
    role:{
        type:String,
        lowecase:true,
        trim:true,
        enum:["admin","seller","user"],
        default:"USER"
    }


})

const userModel = mongoose.model("user",userSchema)
export default userModel