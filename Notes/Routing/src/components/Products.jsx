import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
        this is product page
    </div>
    <Link to='bags'> Bags</Link>
    <Outlet/>
    </>
  )
}

export default Products