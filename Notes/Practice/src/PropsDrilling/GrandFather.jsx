import React from "react";
import { Parent } from "./Parent";

export const GrandFather=()=>{

    const data= "kapoor- family";

    return(
        <>
        <div>This is Grandfather from {data}</div>
        <Parent data={data}/>

        </>
    )
}