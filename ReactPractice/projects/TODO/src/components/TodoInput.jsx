import React from 'react'
import { useState } from 'react'
import { FcTodoList } from 'react-icons/fc'
import TodoList from './TodoList'
const TodoInput = () => {

  const[text,setText]=useState("")
  const[list,setList]=useState([])
const handleInput=(event)=>{
 setText(event.target.value)
}

const handlePress=()=>{
setList((prev)=>[...prev,text])
setText("")
}

  return (
  <>
  <input  onKeyDown={(event)=>{
    if(event.key=="Enter"){handlePress}
  }}  onChange={handleInput} className='border-black border-2' type="text"  value={text}/>
  <button onClick={handlePress} className='bg-blue-800 text-amber-100 rounded w-25'>Add</button>
  <TodoList list={list}/>

  </>
  )
}

export default TodoInput