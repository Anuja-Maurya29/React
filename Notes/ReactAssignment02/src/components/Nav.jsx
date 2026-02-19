import React from 'react'
import { Link } from 'react-router-dom'

 export function Nav(){
    const styling={
        display:"flex",
        gap:"20px",
        background:"lightblue",
        padding:"10px",
        color:"white"

    }

  return (
   <>
   <nav style={styling}>
    <Link to="/">Home</Link>
    <Link to="/add">Add</Link>
   </nav>
   </>
  )
}

