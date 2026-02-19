import React, { useContext } from 'react'
import { MyContext } from './Context'

 export const Header = () => {
    const data = useContext(MyContext)

  return (
    <>
    <div>Header </div>
    </>
  )
}

