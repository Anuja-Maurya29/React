import React, { useState } from 'react'

 export const Input = () => {

const [name,setName]=useState("")

function handleChange(event){
    let data = event.target.value
    setName(data.toUpperCase)

}
    
  return (
<>
<div className="input">
    <form  className="user">
        <input  onChange={handleChange} type="text"
        placeholder='Enter Name'value={name} />
    </form>
   
</div>
</>
  )
}

