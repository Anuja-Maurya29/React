/*### **7. Form Validation – Required Field*
<form id="signupForm">
  <input type="text" id="username" placeholder="Enter username" />
  <button type="submit">Submit</button>
  <p id="errorMsg"></p>
</form>
**Task:**
* Prevent form submission if `username` is empty.
* Show error message `"Username is required"` in `<p id="errorMsg">`.
* If filled, clear error and log `"Form submitted!"`.*/

import React from "react";
import { useState } from "react";

 export function Form(){
    const[msg,setText] =useState(" ")
     function validate(){
        let text = msg;
        if(text!=="")
        {
           setText("Form Submitted");
        } 
        else{
            console.log("hello");

            setText("UserName is Required")
        }
     }
   
    return(
<div>
    <input type="text" id="username" placeholder="Enter UserName"  onInput={(event)=>{
        setText(event.target.value)
    }}/>
<button type="submit" onClick={validate}>Submit</button>
<p>{msg}</p>
</div>
    )
}