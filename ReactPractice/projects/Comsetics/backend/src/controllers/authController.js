
import { json } from "express";
import userModel from "../models/userSchema.js";
import { generateToken } from "../services/jwtTokenGenerator.js";
import bcrypt from 'bcrypt'

export async function signUp(req, res) {

   const {firstName,lastName,email,password}= req.body

    if(!firstName||!lastName||!email||!password){
        return res.status(400).json({
            message:"All feilds are required"
        });
    }
  try {
    
      const userExist = await userModel.findOne({ email});
      if (userExist) {
        throw new Error("User already exists");
      }
    
      const hashedPassword = await bcrypt.hash(password, 10);
    
      const user = await userModel.create({
        ...req.body,
        password: hashedPassword,
      });

    const findUser = await userModel.findOne({ email });
   

    const cookieObject = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };
    const token = generateToken(findUser._id);

    if(user){

      res.cookie("token", token, cookieObject);
      return res.status(201).json({
        message: "data submitted",
        data:user
      });
    }

  } catch (error) {
    if (error.code == 1100) {
      res.json({
        message: "Duplicate key error",
      });
    }
    if (error.message === "User already exists") {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({
      message: error.message,
    });
  }
}


export async function login(req,res){

  const{email,password}= req.body

  if(!email||!password){
    return res.status(400).json({
      sucess:false,
      message:"All feilds are required"
    })
  }

try{

  const findUser = await userModel.findOne({email}).select("+password")
  // console.log(findUser,"user");

  if(!findUser){
    return res.status(400).json({
      sucess:false,
      message:"User not found"
    })
  }

  const passwordMatch = await bcrypt.compare(password,findUser.password)
  console.log(passwordMatch,"match");
  if(!passwordMatch){
    return res.status(400).json({
      sucess:false,
      message:"Invalid credentials"
    })
    
  }

  const cookieObject={
    maxAge:24*60*60*1000,
    httpOnly:true
  }
  
  const token = generateToken(findUser._id)
  res.cookie("token",token,cookieObject)
  return res.status(200).json({
    sucess:true,
    message:"User logged in sucessfully"
  })

}
catch(error)
{
if(error.message==="All feild are required"){

  return res.status(400).json({
    message:error.message
  })
}

}

}

export async function logout(req,res){

  res.clearCookie("token")
  res.status(200).json({
    sucess:false,
    message:"user logged out"
  })
}
