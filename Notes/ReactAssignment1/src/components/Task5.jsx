/* 
### **5. Event Listener – Button Click**

Given:

```html
<button id="clickMe">Click Me</button>
<p id="output"></p>
```

**Task:**

* When the button is clicked, change the `<p>` text to `"Button was clicked!"`.
*/
import React from 'react'
import { useState } from 'react'
export function ButtonClick(){
const [text , setText] = useState("Anuja");

function fun1(){
    
    setText("Button was clicked");
}
 return (
       <div>
    <button onClick={fun1}>Click me!</button>
    <p >{text}</p>
  
</div>
 )
}
