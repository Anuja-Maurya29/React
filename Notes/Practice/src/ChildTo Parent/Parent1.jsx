import React, { useState } from "react";
import { Child1 } from "./Child1";



export const Parent1 =()=>{
    const[age,setAge]=useState(0)
    const name = "Anuja";

    return(
        <div>Parent age is:{age}
            <Child1 name ={name} age={age} setAge={setAge}/>
        </div>
    )
}