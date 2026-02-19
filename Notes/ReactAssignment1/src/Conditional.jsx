import React from "react";
import { useState } from "react";


const Conditional = () =>{
    const[name,setName] =useState("hello")
    return(
        
        <>{name}
        <input type="text" placeholder="Enter Name" onInput={(event)=>{setName(event.target.value)}} />
        {/* <button onClick={()=>{
            setName("welcome ")
            update('res')
            // alert("Welcome "+ name)
        }} >Alert Button</button> */}
       
        </>
    )
}
export default  Conditional;
