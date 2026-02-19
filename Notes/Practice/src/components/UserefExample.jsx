import React, { useRef, useState } from "react";

export function  UserefExample()
{
  
  
  const [time,setTime] = useState(0)
  let timerRef = useRef(null)

  
    function handleStart(){
      if(timerRef.current==null){

        
        timerRef.current = setInterval(()=>
        {
            setTime((prev)=>prev+1)
          },1000)
        }

    }
      function handleStop(){
           clearInterval(timerRef.current)
           timerRef.current=null;
    }

  function handleReset(){
     handleStop();
     setTime(0);
    }


return(
    <>
    <div className="watch">StopWatch:{time}</div>
    <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    </>
)

}
