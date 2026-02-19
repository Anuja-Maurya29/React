import React from 'react'
import TodoCard from './TodoCard'
import { CiEdit } from "react-icons/ci";
const TodoList = ({list}) => {
  const delete=()=>{
    list.filter(())
  }

    
  return (
   <>
  
  <ul>
    {list.map((todo,index)=>{
    return(

<li key={index}>
   <p className='flex gap-2'>  <span>{todo}</span>
        
        <div className="button">
        <button>  <CiEdit/> </button>
       <button onClick={delete()}> <FaTrash/></button>
        </div> </p>
</li>
   
    )
  })}
  </ul>
   </>
  )
}

export default TodoList