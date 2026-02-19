import React from 'react'
import { useState } from 'react'

const TextArea = () => {
    const[text,setText]=useState("")

    const handleText=(event)=>{
setText(event.target.value)
    }
  return (
   <>
   <p>TextArea</p>
   <form action="">
    <textarea onChange={handleText} name="text" id="" value={text}></textarea>
<p>text:{text}</p>
   </form>
   </>
  )
}

export default TextArea