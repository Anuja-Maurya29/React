import React from 'react'
import { Link } from 'react-router-dom'
 export function UserList(){
  return (
    <>
    <div>UserList</div>
    <div>
  <input type="text" placeholder='Search here' />
  <button><Link to='/add' >ADD</Link></button>
    </div>
    </>
  )
}

