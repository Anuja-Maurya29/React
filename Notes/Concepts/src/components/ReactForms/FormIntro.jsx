import React from 'react'
import { useState } from 'react'

const FormIntro = () => {
    const[name,setName]=useState("")

    const handleInput=(event)=>{
        setName(event.target.value)
    }
  return (
 <>
 <p>React Forms</p>
 <form action="">

<label htmlFor="name">Enter Name</label>
    <input onChange={handleInput} type="text" name="name" id=""  value={name}/>
    <button type='Submit'>Submit</button>
 </form>
 </>
  )
}

export default FormIntro