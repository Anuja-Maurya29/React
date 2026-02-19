import {  useEffect, useState } from "react"

export  function UseEffect(){


    const[name,setName]= useState(" ")

    useEffect(()=>{
        const data = localStorage.getItem("name")
        if(data){
            setName(data);
        }
    },[])

    useEffect(()=>{
     if(name){
        localStorage.setItem("name",name)
     }
    },[name])
    return(
        <>
        <h1>UseEffect example</h1>
        <p>WELCOME, {(name)?name:"guest"} </p>
        <input type="text" 
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        </>
    )
}