import React from 'react'
import { Nav } from '../../Nav'
import { Link } from 'react-router-dom'


export  function  Home ({student}) {
  console.log(student);

  return (
  <div>
      <div>welcome to student Dashboard</div>
      <div className="input">
        <label>Search User</label>
      <input type="text " placeholder='Enter user' />
      <button><Link to="/add">ADD USER</Link></button>
      </div>

 
  </div>
  )
}


