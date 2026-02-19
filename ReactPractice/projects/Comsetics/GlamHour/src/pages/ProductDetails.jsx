import React, { useEffect, useState } from "react";
;
import { useParams } from "react-router-dom";
import Review from "../components/Review";

const ProductDetails =() => {
  const { product_id } = useParams();
  const[productData,setProductData]=useState({})
  const[loading,setLoading]=useState(false)
useEffect(()=>{

  ProductDetail()

},[])

const ProductDetail =async()=>{

  const result = await fetch(`https://dummyjson.com/products/${product_id}`)
  const data =  await result.json()

  setProductData(data)
  setLoading(true)
}
console.log(productData,"product data ");
  
  return (
    <>
    {
      (loading)?(<div className="w-full min-h-screen bg-amber-50 ">
        <div className="container flex gap-3">
       
          <div className="image">
            <img src={`${productData.thumbnail}`} alt={productData.title} />
          </div>
          <div className="description flex-col">
            <p className="text-3xl font-bold">{productData.title}</p>
            <p>{productData.description}</p>
            <p className="font-semibold">Dimensions</p>
            <div className="dimensions flex gap-3 text-gray-600">
              <p>height: {productData.dimensions.height}</p>
              <p>width: {productData.dimensions.width}</p>
            </div>
            <p>{productData.warrantyInformation}</p>
          </div>
        </div>
        <div className="reviews">
          {productData.reviews.map((review,index)=>(
            <Review key={index} review={review}/>
          ))}
        </div>
      </div> ):(<p>loading....</p>)
    }

       


    </>
  );
};

export default ProductDetails;
