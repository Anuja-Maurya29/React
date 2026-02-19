/*
### **4. Removing Elements*
<ul id="tasks">
  <li>Task 1</li>
  <li id="removeMe">Task 2</li>
</ul>
**Task:**
* Remove the `<li>` with id `"removeMe"`.
*/

import React from "react";
// import { useState } from "react";
  export function RemoveList(){

  return(
 <div>
     <ul>
      <li>Task1</li>
      <li>Task2</li>
    </ul>
    <button >Remove List</button>

 </div>
  )
 }