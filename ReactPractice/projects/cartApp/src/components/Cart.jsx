import React, { useState } from 'react'

 export const Cart = () => {
    const[cart,setCart]= useState([])
    // data 
    const products=[
        {id:1,name:"cake",price:1000},
        {id:2,name:"pizza",price:1500},
        {id:3,name:"rice bowl",price:1200}
    ];

    //HnadleADd
    const handleAdd=(product)=>{
    setCart([...cart,product])
}

const handleDelete=(id)=>{
    const update =cart.filter((item)=>item.id !==id);
    setCart(update);
}
  return (
   <>
   <h1>Products list</h1>
   <ul>
    {products.map((item)=>{
        return(
    <li key={item.id}>{item.name}-Rs:{item.price}
    <button onClick={()=>handleAdd(item)}>Add Item</button>
    </li>
    )})}
   </ul>

   <h2>Cart items</h2>
   {(cart.length===0)?(
    <p>no items in cart</p>
   ):( 
    cart.map((item)=>(
     <p>{item.name}-Rs:{item.price}
     <button onClick={()=>handleDelete(item.id)}>Remove</button>
     </p>
    
   )))
 
   }

   <p>Total Amount:Rs{cart.reduce((acc,cv)=> acc+cv.price,0)}</p>
  
   </>
  )
}

