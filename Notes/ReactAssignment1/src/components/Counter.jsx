import { useState } from "react";
import Button2 from "./AlertBox";
function Counter(){
   const [count,setCount] = useState(0)
// let name="Anuja"
   
   return(
      <>
      <div>Count: {count}</div>
      <div id="Buttons"> 

    <button type="button" className="btn" id="inc" onClick={()=>setCount(count+1)}>Increement</button>
    <button type="button" className="btn" id="dec" onClick={ ()=>setCount(count-1)}>Decreement </button>

      </div>
    {/* <Button2 count={count} name={name}/> */}
      </>
   ) 
}
export default Counter;