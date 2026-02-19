import React from 'react'
import { Link } from 'react-router-dom'

 export const Nav = () => {
  return (
    <div>
<ul className='nav'>
   <Link to='/'><li>Home</li></Link>
    <Link to="/counter"><li>Counter</li></Link>
</ul>
    </div>
  )
}

