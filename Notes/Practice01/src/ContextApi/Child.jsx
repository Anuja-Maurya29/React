import React, { useContext } from 'react'
import { MyContext } from './Context'

 export const Child = () => {
    const data = useContext(MyContext)
    console.log(data);
  return (
   <>
   <p>data from context api </p>
   </>

  )
}
