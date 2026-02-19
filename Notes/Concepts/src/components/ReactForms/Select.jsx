import React from 'react'
import { useState } from 'react'

const Select = () => {
const[tech,setTech]=useState("")

const handleChange=(event)=>{
setTech(event.target.value)
}

  return (
   <>
   <p>React select list</p>
   <form action="">
    <select name="tech" id="tech" value={tech} onChange={handleChange}>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
        <option value="Java">Java</option>
    </select>
   </form>
   </>
  )
}

export default Select