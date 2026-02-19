import React from 'react'
import { Route,Routes ,Link} from 'react-router-dom'
import './App.css'
import { Nav } from './Nav'
import {Home }from './components/nav/Home'
import { Add } from './components/nav/Add'
import { Show } from './components/Show'

function App() {

  return (
    <>
   <div className="header">
    <Nav/>
    <Routes>
<Route path='/'  element={<Home/>}></Route>
<Route path='/add'  element={<Add/>}></Route>
<Route path='/show'  element={<Show/>}></Route>
    </Routes>
   </div>
    

    </>
  )
}

export default App
