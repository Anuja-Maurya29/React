import React, { useReducer } from 'react'

 export const Counter = () => {
    const [count,CounterDispatch] =useReducer(CountReducer,0)

    function CountReducer(state,action){
        if(action.type==="inc")
        {
           return count+1; 
        }
        if(action.type==="dec")
        {
            return count-1;
        }

    }
  return (
   <>
    <div>Counter</div>
    <p>Counter:{count}</p>
    <button onClick={
        CounterDispatch(()=>{
            CounterDispatch({type:"inc"})
        })
    } >Increase</button>
     <button onClick={()=>{
        CounterDispatch({type:"dec"})
     }} >Decrease</button>
   </>
  )
}
