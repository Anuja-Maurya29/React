/*
### **6. Click Counter with Reset**

* Show a number starting at `0`.
* Each time a button is clicked, increase the number by 1.
* After **10 seconds**, automatically reset the counter to 0.*/

import React from "react";
import { useState } from "react";

 export function Count(){
 const[count,setCount] =useState(0)
    return(
        <div>
            <p>COUNT:{count}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increase</button>
            <button  onClick={()=>{
                setCount(0)
            }} type="reset">Reset</button>
        </div>
    )
}