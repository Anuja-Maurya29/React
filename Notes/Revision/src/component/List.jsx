import React from 'react'

 export function List ({student,ondelete}) {
  return (
  <>
    <div>List</div>
    {student.map((data)=>(
      
      <div>

        <p key={data.name}>{data.name}-{data.course}</p>
            <button onClick={()=>ondelete(data.name)}>Delete</button>
      </div>
    
    ))}
  </>
  )
}
