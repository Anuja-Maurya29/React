import dotenv from 'dotenv'
import productModel from "../models/productsSchema.js";
import mongoose from 'mongoose';
dotenv.config()

  const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_URI)
    console.log("database Connected");
    }
    catch(error){
        console.log(error.message);
        process.exit(1)
    
    }
    console.log(process.env.DB_URI);
  }
  dbConnection()
const productImport =async ()=>{


const url=process.env.DB_URI

    
    


const MAX_PRODUCTS =500
let savedProducts=0
const result =  await fetch ('https://makeup-api.herokuapp.com/api/v1/products.json')
const products =  await result.json()
console.log( typeof products);
console.log(products.length);



const data  = await productModel.insertMany(products)

if(data){
  
    console.log("products save");
    process.exit(0)
}


}
productImport()


// for( const item of products){
    
// if(Number(item.price)<=0||item.rating===null)continue;

// await productModel.create({
// brand:item.brand,
// name:item.name,
// price:item.price,
// price_sign:item.price_sign,
// currency:item.currency,
// image_link:item.image_link,
// description:item.description,
// rating:item.rating,
// product_type:item.product_type,
// tag_list:item.tag_list.map((tag)=>tag),
// product_colors:item.product_colors.map((color)=>({
//     hex_value:color.hex_value,
//     colour_name:item.colour_name
// }))



// })

// }