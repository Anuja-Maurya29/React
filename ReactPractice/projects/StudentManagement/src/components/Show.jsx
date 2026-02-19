import React from 'react'

 export const Show = ({student}) => {

  console.log(student);

  return (
    <>
    <div>Student List</div>

   {student.map((data)=>
   (
 <p>{data.name} {data.email}{data.role}</p>
   ))}
    </>
  )
}

