/*
### **3. Creating and Appending Elements**

**Task:**

* Dynamically create a `<li>` element with text `"Intern 1"`.
* Append it to an existing `<ul id="internList">`.

Example HTML:

```html
<ul id="internList">
  <li>Existing Intern</li>
</ul>
```

After JS execution, list should have both items.*/
import React from "react";
import { useState } from "react";
export function CreateList(){

    const [Interns , NewInterns] =useState(["Intern"]);

    function addIntern(){
        let x =1;
        NewInterns([...Interns,`Intern${x}`])
        x++;
    }
    return(

        <div style={{padding:"20px"}}>
<ul>
{Interns.map((intern)=>(
    <li>{intern}</li>
))}
</ul>
<button onClick={addIntern}>Add Interns</button>
        </div>
    )
}