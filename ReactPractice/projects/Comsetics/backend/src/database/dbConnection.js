
import mongoose from "mongoose"


console.log(typeof url);

  const dbConnection = async()=>{
try{
    await mongoose.connect(process.env.DB_URI)
console.log("database Connected");
}
catch(error){
    console.log(error.message);
    process.exit(1)

}

}

export default dbConnection