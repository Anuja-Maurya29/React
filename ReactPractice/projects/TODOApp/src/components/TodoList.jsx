// import React, { useState } from "react";

import { TODOSingle } from "./TODOSingle"

export function TODOList({list}){
   
    
// let task ;
// list.map((element)=>{
//     element;
// })
return(
<>
{/* <li>{element}</li> */}

<ul> 

{list.map((item,index)=>{
    
    // console.log(item,"item");
    // task =item;
    
    return <TODOSingle item={item} index={index}/>
    
})}
</ul>

    


</>
)
}