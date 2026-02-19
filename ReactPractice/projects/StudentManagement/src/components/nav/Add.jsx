import React, { createContext, useReducer, useState } from 'react'
import { useRef } from 'react'
import {  Link } from 'react-router-dom'
import { Show } from '../Show'
import { Home } from './Home'
import { MyContext } from '../../Context/UserContext'

// import { useNavigate } from 'react-router-dom/'

function StudentReducer(state,action){

    if(action.type==="add")
    {
     return ( [...state,{name:action.payload.name,
        email:action.payload.email,
        role:action.payload.role
    }])
        
    }

    
}



export const Add = () => {
    const StudentData = createContext()

    // const navigate = useNavigate()
    const[name,setName]= useState("")
    const[role,setRole] =useState("")
    const[email,setEmail] =useState("")
    const RoleRef = useRef(null)
    const[student,StudentDispatch] = useReducer(StudentReducer,[])
    
    function handleName(event){
        setName(event.target.value)   
        console.log(name);     
    }
    
    
    function handleSelect(){

        const data = RoleRef.current.value
        setRole(data)
        console.log(role);
      
    }
    
    function handleEmail(event){
      setEmail(event.target.value)
      console.log(email);
    }

function handleCLick(e){~``
    e.preventDefault()
    if((!name)&&(!email)&&(!role))
    {
        alert("Fill the required feilds")
        return;
    }
    // handleSelect();
    StudentDispatch(
        {type:"add",
            payload:{name,email,role}
        })
        setName("")
        setRole("")
        setEmail("")
        RoleRef.current=""
        // navigate('/')
        
    // }
    
}


return (
    <>
    <div className="form">
        <form onSubmit={handleCLick} className='StudentData'>
        <label>Enter Name 
            <input  onChange={handleName} placeholder='Enter Name' value={name}></input>
        </label>

         <label>Enter Email
            <input  value={email} onChange={handleEmail} placeholder='Enter email'></input>
        </label>

        <label>Select Role
            <select defaultValue={role}  onChange={handleSelect} ref={RoleRef} >
                <option  value="Frontend">Frontend</option>
                <option  value="Backend">Backend</option>
                <option  value="Fullstack">Fullstack</option>
            </select>
        </label>

  

<button  type='submit' style={{width:"100px"}}>Add</button>
        
        </form>
        
        <MyContext.Provider>
       
        </MyContext.Provider>
    </div>
    </>
  )
}

