 /* ### **2. Changing Content & Styles**
html
<div id="box">Old Content</div>
* Change the content to `"New Content Loaded"`.
* Add a red border (`2px solid red`) using JavaScript.
*/
 
 import { useState } from "react"
 export function ColorBox(){
       const [color,setColor] = useState("red")
       const [text,setText]  =useState("old content")
    return(
       
        
        <div id ="box" onMouseOver={()=>{setColor("blue"); setText("new content")}}  
        onMouseOut={()=>{setColor("red"); setText("old content")
 }}  style={{backgroundColor:color , color:"white"} }>
        
         {text}   

        </div>
    
    )
}
