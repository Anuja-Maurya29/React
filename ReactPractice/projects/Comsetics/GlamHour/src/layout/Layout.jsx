import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'



const Layout = () => {
  


  return (
 <>

 <Navbar2/>
 <main className=' bg-gray-950 min-h-screen pt-16 '>
    <Outlet/>
 </main>
 </>
  )
}

export default Layout