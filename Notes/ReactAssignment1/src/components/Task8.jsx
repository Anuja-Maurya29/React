/*
### **8. Form Validation – Simple Email Check**
<form id="emailForm">
  <input type="text" id="email" placeholder="Enter email" />
  <button type="submit">Submit</button>
  <p id="emailError"></p>
</form>
**Task:**
* Validate that email contains `"@"`.
* If not, show `"Invalid email format"`.
* Otherwise log `"Valid email"`.
*/
import React from "react"
import { useState } from "react"
export function ValidateEmail(){

const[email,getemail] =useState("")
 
function validate(){
    let mailId =email
   
    if(mailId.includes("@")){
       getemail("Valid email format") 

    }
    else{
        getemail("InValid email format")
        
        
    }
    console.log(typeof(mailId));
}
    return(
        <form id="emailForm">
            <input type="text" name="email" id="email" placeholder="Enter Eamil"
            onInput={(event)=>{getemail(event.target.value)
        
            }} />
            <button type="button" onClick={validate}>Submit</button>
            {/* {console.log(email)} */}
            <p>{email}</p>
        </form>
    )
}