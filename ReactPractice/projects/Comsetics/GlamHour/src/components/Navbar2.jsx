import React from 'react'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

const Navbar2 = () => {
  return (
<nav className='h-16 w-full fixed top-0 z-50'>
    <div className='h-full text-2xl font-bold cursor-pointer text-amber-50 flex items-center justify-between px-4'>
        <span>GlamHour</span>

<div className="two flex  justify-center gap-6 text-2xl font-mono  font-bold ">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <Link to="/products">Products</Link>
        </div>

        <Link to='/login' className='flex items-center gap-2'>
          <User className='h10' /> <span>Login </span>{" "}
        </Link>

    </div>


</nav>
  )
}

export default Navbar2