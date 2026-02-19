import React from "react";
import { Link } from "react-router-dom";
export const Child =(props)=>{

    return(

       <>
            
       <ul>
            <Link to="/child" ><li></li></Link>  
            <Link/>      
       </ul>
       <div>THis is CHhildern from {props.data}</div>
       </>
    )
}