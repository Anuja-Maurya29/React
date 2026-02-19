import React, { useContext } from 'react'
import { MyContext } from './Context'

 export const Child = () => {

    const data = useContext(MyContext)
  return (
  <>
    <div>Child getting data from context api</div>
    <p>{data}</p>
  </>
  )
}
