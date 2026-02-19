import React from 'react'
import { useState } from 'react'

const CheckBox = () => {
const[input,setInput]=useState({})

const handleChange=(event)=>{
const name=event.target.value;
const value=(event.target.type==="checked"?event.target.checked:event.target.value)

setInput((prev)=>({...prev,[name]:value}))

}

  return (
   <>
   <p>CheckBox</p>
   <label htmlFor="name">Enter Name</label>
   <input type="text" name="name" id="" value={input.name} onChange={handleChange} />
   <p>Select your options </p>
   <label htmlFor="onion">Onion</label>
   <input type="checkbox" checked={input.onion} name='onion'  onChange={handleChange}  />
   <label htmlFor="tomato">Tomato</label>
  <input type="checkbox" checked={input.tomato} name='tomato' onChange={handleChange}  />
   </>

  )
}

export default CheckBox