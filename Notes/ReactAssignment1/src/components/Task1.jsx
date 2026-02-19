
/*### **1. Selecting Elements**

Given an HTML snippet:

```html
<h1 id="title">Hello</h1>
<p class="desc">Welcome to training</p>
```

**Task:**

* Select the `<h1>` using `getElementById` and change its text to `"Hello Interns!"`.
* Select the `<p>` using `querySelector` and change its text color to `"blue"`.*/

import React, { useState } from "react";
export function TextChange(){
    const [heading, change] = useState("Hello")
    const [color,colorChange] =useState("black")

    function handleChange(){
change("Hello Interns");
colorChange ("blue");

    }
    
    return(
        <div>
            <h1 id="tittle">{heading}</h1>
            <p style={{color:color}}>WElcome to training</p>
            <button onClick={handleChange}>Change text and color</button>
        </div>
    )
}