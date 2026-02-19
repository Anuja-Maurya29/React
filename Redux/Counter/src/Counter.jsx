import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { inc, dec,reset } from './features/CounterSlice';


export const Counter = () => {
     const dispatch = useDispatch();
    const count = useSelector((state)=>state.Counter.value);
  return (
    <>
    <h1>Counter using redux</h1>
    <p>Count:{count}</p>
  <button onClick={()=>dispatch(inc(100))}>Increement 100</button>
  <button onClick={()=>dispatch(dec(100))}>Decreement 100</button>
  <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

