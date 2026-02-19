import React, { useState } from 'react'
import { RiLoader2Line } from "react-icons/ri";

const Loading = () => {

    const[loading,setLoading]=useState()
    const[text,setText]=useState("")

    const handleInput=(event)=>{
        setText(event.target.value)
    }

    const handleClick=()=>{
        setLoading(false)
        setTimeout(()=>{
setLoading(true)
        },2000)
    }


  return (
   <>
   <input type="text" value={text}  onChange={handleInput}/>
   <button onClick={handleClick}>click</button>
   <p>{(loading)?text:<RiLoader2Line/> }</p>
   </>
  )
}

export default Loading