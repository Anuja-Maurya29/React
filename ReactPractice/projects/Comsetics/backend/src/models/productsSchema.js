import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({

id:String,  
brand:String,
name:String,
price:String,
price_sign:String,
currency:String,
image_link:String,
description:String,
rating:Number,
category:String,
product_type:String,
tag_list:[

],
product_colors:[

    {
        hex_value:String,
        color_name:String
    }
]






},
{timestamps:true}
)

const productModel = mongoose.model("product",productsSchema)
export default productModel