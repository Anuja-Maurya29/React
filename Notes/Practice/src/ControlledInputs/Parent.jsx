import React from "react";
import { useState } from "react";
import { Child } from "./Child";

export function Parent(){
    const [value,setValue]= useState(" ")
return(
<>
<div>
    <h1>Controlled Inputs</h1>
    <Child  name= {value} setname={setValue}/>
</div>
</>
)
}