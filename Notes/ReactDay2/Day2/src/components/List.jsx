import React from 'react'

const List = (props) => {
  return (
    <>
    <h1>List and Keys</h1>
    <ul>
        {props.nums.map((element)=>{
            return(
                <li key={Date.now()}>{element}</li>
            )
        })}
    </ul>
    </>
  )
}

export default List