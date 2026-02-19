import React, { useState } from 'react'

const Login = () => {
    const[value,setValue]=useState("LOGIN")

const toggleText=()=>{
    (value==="LOGIN"?setValue("WELCOME"):setValue("LOGIN"))
}
  return (
 <>
 <button onClick={toggleText}>{value}</button>
 </>
  )
}

export default Login