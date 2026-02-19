import React from 'react'
import { Routes ,Route,Outlet } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Product from './Products'
import Bags from './Bags'


const RoutesFIile = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/product' element={<Product/>}>
 <Route path='bags' element={<Bags/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default RoutesFIile