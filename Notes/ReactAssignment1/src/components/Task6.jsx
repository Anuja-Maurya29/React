/*### **6. Event Listener – Mouse Hover**
<div id="hoverBox" style="width:100px; height:100px; background:gray;"></div>
**Task:**

* When the mouse hovers over the box, change its background color to `"green"`.
* When the mouse leaves, change it back to `"gray"`.
*/

import React from "react";
import { useState } from "react";
 export function Hover(){

    const [color,setColor] =useState("gray");
    
return(
    <div  style={{width:"100px",height:"100px",background:color}}  
    onMouseOver={() => setColor("green")} onMouseOut={() => setColor("gray")}></div>
)
}
