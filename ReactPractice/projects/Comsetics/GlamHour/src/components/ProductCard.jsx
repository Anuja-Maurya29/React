import React from 'react'
import ProductColors from './ProductColors'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'
import { IoCartOutline } from 'react-icons/io5'
 
const ProductCard = ({product}) => {

  return (
    <>
<div className="product-card group flex flex-col bg-white w-64 h-90 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">

  <div className="tagline pt-3 px-3 flex justify-between">
          <span className="bg-orange-200 text-red-400 px-3 rounded-2xl">
         {product.category}
          </span>
          <LikeButton/>
        </div>

           <div className="image  flex items-center justify-center mt-4  ">
          <div className="w-50 h-50 bg-amber-50 object-contain transition-transform duration-300 group-hover:scale-100 ">
            
            <Link to={`/product/productDetails/${product.id}`}>
            
             <img
      src={product.thumbnail}
      alt={product.title}
      className="h-40 object-contain transition-transform duration-300 group-hover:scale-105"
    />
            </Link>
          </div>
        </div>



 
  <div className="px-4 py-3 flex flex-col gap-1">
    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      {product.brand}
    </p>

    <p className="text-sm font-medium text-gray-800 line-clamp-2">
      {product.title}
    </p>

     <div className="cart flex justify-between px-2">
    <span className='text-gray-900 font-bold'>${product.price}</span>
    <button className="bg-blue-800 w-15 px-3 rounded">
      <IoCartOutline size={30} color="white" />
    </button>
     <Link to={`/product/productDetails/${product.id}`}>
      <button  className="text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 px-3 py-1 rounded-md transition-colors">
        View
      </button></Link>
            </div>

  </div>

</div>




    </>
  )
}

export default ProductCard