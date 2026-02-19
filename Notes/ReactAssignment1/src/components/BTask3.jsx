/*
### **4. Auto-Hide Notification**

* Create a button: **"Show Notification"**.
* On click:

  * Show a notification `<div>` with the message **"This is a notification"**.
  * After **5 seconds**, hide the notification automatically using `setTimeout`.*/ 

import React from "react";
import { useState } from "react";
  export function Notification(){
const[notification,setNotification]=useState("")

    return(
<div>
       <button onClick={()=>{
         setTimeout(()=>{
         setNotification(" ")
         },4000)
      return  setNotification("This is a Notification")
        
        }}>Show Notification</button>
   <p>{notification}</p>
</div>

    )
 }