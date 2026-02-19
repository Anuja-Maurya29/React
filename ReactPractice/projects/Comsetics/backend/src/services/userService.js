import userModel from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const signUpUser = async (userData) => {
try{

    const {firstName,lastName,email,password}= userData

    if(!firstName||!lastName||!email||!password){
        return res.status(400).json({
            message:"All feilds are required"
        });
    }

  console.log(userData, "userdata service file");
  const userExist = await userModel.findOne({ email: userData.email });
  if (userExist) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await userModel.create({
    ...userData,
    password: hashedPassword,
  });
  

  return user;
}
catch(error){
console.log(error);

}
};



