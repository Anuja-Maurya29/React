import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

 export const Counter = () => {
    const[count,setCount] =useState(0)


useEffect(()=>{
    console.log(" useEffect running");
},[count]);


    function handleClick(){
        setCount(count+1)
    }
  return (
    <div>
<h1 style={{margin:"10px", fontSize:"30px" , color:"red"}}>Counter button example</h1>
<p style={{margin:"10px"}}>Count : {count}</p>

<button onClick={handleClick} className='"text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
<button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"' >Increement</button>
    
    </div>
  )
}

