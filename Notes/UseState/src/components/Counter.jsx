import React, { useState } from 'react'

import { inc,dec } from '../features/CounterSlice'
import { useDispatch ,useSelector } from 'react-redux'
 export const Counter = () => {

const[counter ,setCount] = useState(0)
  const countValue = useSelector((state)=>state.count.count)
  const dispatch = useDispatch()
  return (
    <>
    <p>counter with redux </p>
    <p>COUNTER :{countValue}</p>
    <button onClick={()=>{
      dispatch(inc())
    }}>inc</button>
    
      <button onClick={()=>{dispatch(dec())}}>dec</button>

      <div className='flex flex-col gap-3'>
        <p>counter with useState batch updates ex </p>
        <p>second Counter:{counter}</p>
        <button className='bg-blue-800 w-25 text-white' onClick={()=>{
          setCount((prev)=>prev +1)
           setCount(counter+1)
            setCount(counter+1)
             setCount((prev)=>prev+10)
          }}>inc</button>
           <button  className='bg-blue-700 w-25 text-white' onClick={()=>{setCount(counter-1)
           setCount(counter-1)
           setCount(counter-1)
           setCount(counter-1)

           }}>dec</button>

           <button className='w-25 bg-red-600 text-white' onClick={()=>{setCount(0)}}>Reset</button>
        
           <p>concept of prev value</p>
            
            
 
  

            </div>
    </>
  )
}

