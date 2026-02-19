import React from "react";
import { Child } from "./Child";

 export const Parent  = (props)=>{

    return(
   <>
   <div>This is parent from {props.data} </div>
<Child data={props.data}/>

   </>

    )
}
