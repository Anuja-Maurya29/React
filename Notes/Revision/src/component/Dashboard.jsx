import React, { useReducer, useState } from 'react'
import { List } from './List'


 function StudentReducer(state,action){

  if(action.type ==="Add")
  {
    return [...state,{name:action.payload.name,course:action.payload.course}]
  }
  
  if(action.type==="Delete")
    {
      return state.filter((data)=> data.name!==action.payload.name)
    }
    return state;
  
 }


 export const Dashboard = () => {
const[name,setName]=useState(" ")
const[course,setCourse]=useState(" ")


const[student,StudentDispatch] = useReducer(StudentReducer,[])


function  handleName(event){
setName(event.target.value)
}
function handleCourse(event){
setCourse(event.target.value)
}

function handleAdd(){

StudentDispatch({type:"Add",
  payload:{name,course}
})
    
    setName("")
    setCourse("")
}

function handleDelete(){

  StudentDispatch({type:"Delete",
    payload:{name}
  })
}

  return (
  <>
    <div>Dashboard</div>
    <div className="data">
        <label>Enter Name:
            <input onChange={handleName}type="text" value={name} placeholder='Enter name' />
        </label>
          <label>Enter Course:
            <input  onChange={handleCourse} type="text" value={course} placeholder='Enter course' />
        </label>
        <button onClick={handleAdd}>ADD</button>
    
        <List student={student} ondelete={handleDelete}/>
    </div>
  </>
  )
}

