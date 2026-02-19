/*### **2. Character Counter**
* Create a `<textarea>` for user input.
* Below it, display: **"Characters left: 100"**.
* As the user types:

  * Update the remaining count (100 – length of input).
  * Turn the count red if it goes below 0.*/
import React from "react";
import { useState } from "react";
 export function CharCounter(){

    const[char,charLeft]=useState(100)
    const[textColor,setTextColor]=useState("black")
 
    return(
     <div>
        <textarea onInput={(event)=>{
            let text = event.target.value.trim();
            let wordCount;
            if(text!=="")
            {
             wordCount =100-(text.length)
            }
            if(wordCount<10){
            setTextColor("red")
            }
          
            charLeft(wordCount)
        }} style={{width:"100vw",height:"40vh", background:"pink", 
        color:textColor , fontSize:"30px"}}></textarea>
    <p>Characters left:{char}</p>
     </div>
    )
}