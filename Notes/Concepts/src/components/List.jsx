import React from 'react'

const List = () => {
    const list=["pen","eraser","bottle","bag"]
  return (
   <>
   <p>List example</p>
   <ul>
   {
    list.map((item,index)=>{
        return(
            <li key={index}>{item}</li>
        )
    })
   }
   </ul>
   
   </>
  )
}

export default List