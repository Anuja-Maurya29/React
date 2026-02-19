import React, { useState } from 'react'

const Input = () => {
    const[students,setStudents] = useState([])
const [data,setData] = useState({
  id:Date.now(),
    name:"",
    course:""
})


const handleChange =(event)=>{
     setData({...data,[event.target.name]:event.target.value})
    
}


function handleSubmit(event){
event.preventDefault()
setStudents([...students,data])
// setData("")
setData({  id:Date.now(),name:"",course:""})
}

function handleDelete(id){
  console.log("hello", id);
const newList = students.filter((s)=>s.id!==id)
console.log(newList,"newList");
setStudents(newList)
}
console.log(students,"students");


  return (
   <>
   <div className="form flex  justify-center justify-items-center ">
 
    <form method='post' onSubmit={handleSubmit} className=' flex flex-col   gap-2  justify-center items-center border-2 border-gray-900 mt-40 w-xl h-80'>
      <label htmlFor="name">
        Enter Name:
          <input  className='border-gray-800' type="text"
        name='name'
        onChange={handleChange}
        value={data.name}
        placeholder='Enter Name' />
      </label>

       <label htmlFor="name">
        Enter Course:
          <input  className='border-gray-800' type="text"
        name='course'
        value={data.course}
        onChange={handleChange}
        placeholder='Enter course' />
      </label>
      <button  type='submit' className='bg-blue-950 w-50 m-2.5 text-white'>Add Details</button>
    </form>
   </div>
   <div className="list mt-5  grid grid-cols-3 grid-rows-4 m-5 space-y-1.5">

    {students.map((student)=>{
        return(
           <div key={student.id} className='w-30 h-15'>
            <div className=' bg-blue-300 text-gray-900 p-3'>
             <p>{student.name}</p>
            <p>{student.course}</p>
<button onClick={()=>handleDelete(student.id)} className='bg-red-500 text-white'>Delete</button>
            </div>
           </div>
        )
    })}
   </div>
   </>
  )
}

export default Input