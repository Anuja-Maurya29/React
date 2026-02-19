/*### **9. Timers (setTimeout, setInterval, clearInterval)**

* Create a countdown timer:

    * Have a ```<p> that shows: "Countdown: 10"```.
    * On button click:
        * Start a countdown from 10 → 0 using setInterval.
        * When it reaches 0, show "Time’s up!" and stop the interval (clearInterval).

**Bonus:**

* Add another button: "Stop Timer" → stops the countdown midway.
 */

import React from "react";
import { useState } from "react";

 export function Countdown(){
const [count,setCounter] =useState(10)

function start(){
let id = setInterval(()=>{
    console.log(count);
    

    if(id) clearInterval(id)

    setCounter(prev => prev - 1)

},1000)
}
    return(
<div>
    <p>CountDown{count}</p>
<button type="button" onClick={start}>Start</button>
<button type="button">Stop</button>
</div>
    )
}