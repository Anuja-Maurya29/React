import React from "react";
import { useState } from "react";


function AlertBox(){
    const[name,setName] =useState("")
    return(
        
        <>
        <input type="text" placeholder="Enter Name" onInput={(event)=>{setName(event.target.value)}} />
        <button onClick={()=>{
            setName(" ")
            alert("Welcome "+ name)
        }} >Alert Button</button>
       
        </>
    )
}
export default  AlertBox;