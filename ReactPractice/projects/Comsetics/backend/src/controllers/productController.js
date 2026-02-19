import productModel from "../models/productsSchema.js"


 export const getProducts =async (req,res)=>{

    const page = parseInt(req.query.page)||1
    const limit= parseInt(req.query.limit)||10

    

    const skip = (page-1)*limit

    try{
        const total = await productModel.countDocuments()
       const data = await productModel.find().skip(skip).limit(limit)

       if(page>total)
        {

      return  res.status(400).json({
            sucess:false,
            message:"NO result found for the Query"
        })
       }

     if(data.length=!0){

      return   res.status(200).json({
     totalRecords :total,
     totalPages:Math.ceil(total/limit),
     limit:limit,
     data
        })
     }



    }
    catch(error){
        console.log("Error:",error.messgae);
    
    }


}


export const search = async (req,res)=>{
       const{ key,value}= req.query
       



    try{
const products = await productModel.find({[key]:[value]})
if(products){
    res.status(200).json({
        sucess:true,
        length:products.length,
        products
    })
}

    }
    catch(error){
        console.log("Error:",error.messgae);
    }
}
