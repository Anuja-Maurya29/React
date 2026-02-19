import React from 'react'
import { useState } from 'react'

const MultipleFormInputs = () => {
    const[input,setInput]=useState({
        name:"Anuja",
        email:"XYZ@gmail.com"
    })

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value

        setInput((prev)=>({...prev,[name]:value}))

    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        
        alert(`${input.name}`)
    }
  return (
    <>
      <p>Multiple form inputs</p>
      <form  action="" onSubmit={handleSubmit}>
        <input name='name' value={input.name} type="text" onChange={handleChange} />
        {/* <input name='pass' value={input.pass} type="password" onChange={handleChange}  /> */}
        <input name='email' value={input.email} type="email"  onChange={handleChange} />
     <button type='submit'>Submit</button>
      </form>
    </>

  )
}

export default MultipleFormInputs