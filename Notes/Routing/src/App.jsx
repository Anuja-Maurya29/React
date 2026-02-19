import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import RoutesFIile from './components/RoutesFIile'

const App = () => {
  return (
    <>
  <BrowserRouter>
  <Nav/>
  <RoutesFIile/>
  </BrowserRouter>
    </>
  )
}

export default App