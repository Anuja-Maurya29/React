import React, { useContext } from 'react'
import { MyContext } from './Context'

export const Profile = () => {
    const getData = useContext(MyContext)
    console.log(getData, 'child');
  return (
 <>
    <div>Profile</div>
    <p>name:{getData.name}</p>
    <p>course:{getData.course}</p>
 </>

  )
}

