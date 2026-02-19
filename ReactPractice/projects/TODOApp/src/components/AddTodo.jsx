import React from "react";
import { useState } from "react";
import { TODOList } from "./TodoList";



 export function AddTodo(){


    // function getName(name)
    // {
    //     console.log(name);
    // }
const [text,setText]=useState(" ")
let[task,setTask]=useState([])

function handleInput(event){
setText(event.target.value);
}

function handleSubmit(){
setTask((prev)=>[ ...prev,text])
  
console.log(task);


    setText(" ");
    // <TODOList/>

}

    return(
        <>
        <h1 id="heading">TODO APP</h1>
        <section id="AddTask">
            <input onChange={handleInput}  value={text} type="text"placeholder="Add Task" />
            <button type="submit"  onClick={handleSubmit} id="add" >ADD</button>
        </section>

        <TODOList list={task}/>
        
        </>

    )

}