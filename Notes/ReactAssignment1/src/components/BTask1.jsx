/*
## Bonus Questions 
### **1. Toggle Theme**
<button id="themeToggle">Toggle Theme</button>
<body id="pageBody">Hello, WIP!</body>

**Task:**
* On button click, toggle the background color of the page between `"white"` and `"black"`, and text color between `"black"` and `"white"`.
* content inside body should be `"center-aligned"`, center of the screen.*/

import React from "react";
import { useState } from "react";

 export function ToggleTheme(){
    const[theme,setTheme] =useState("black")
    const[textColor,setTextColor] =useState("white")
    function changeTheme(){
    if(theme=="white"){
        setTheme("black")
        setTextColor("white")
    }
    else{
        setTheme("white");
        setTextColor("black")
    }

    }

    return(

        <div>
        <section style={{background:theme ,height:"50vh",width:"150vw"}}>
             <p style={{color:textColor}}>Let's Partyyyy!!</p>
        </section>
        
          <button onClick={changeTheme}> Toogle Theme</button>
          </div>
    )

}
