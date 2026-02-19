import React from 'react'
import { Aperture ,Heart,Search } from 'lucide-react';

const NavBar = () => {
  return (
    <div>
<nav className='bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40  '></nav>
<div className='max-w-7xl mx-auto p-8'>

  <div className='flex items-center justify-between'></div>

<div className='flex items-center gap-2'>
  <Aperture className='text-violet-500 ' size={24}/>
  <span className='textt-xl font-bold  text-white'>LensRight</span>
</div>
</div>
</div>



  )
}

export default NavBar