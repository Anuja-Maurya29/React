import React from 'react'
import { MyContext } from './Context'
import Child from './Child'

 export const GParent = () => {
    const name="anuja";
  return (
    <>
    <div>GParent</div>
   <MyContext.Provider value={name}>
    <Child />
   </MyContext.Provider>
    </>
  )
}

