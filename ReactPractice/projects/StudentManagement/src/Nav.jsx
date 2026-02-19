import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
    <div className='nav'>
        <ol className='navlist' style={{listStyle:"none"}}>
            <li>
               <Link to="/"
               >Home</Link>
            </li>
            <li>
                <Link to="/add">Add</Link>
            </li>
            <li>
                <Link to="/show">Show</Link>
            </li>
        </ol>
    </div>
  )
}

