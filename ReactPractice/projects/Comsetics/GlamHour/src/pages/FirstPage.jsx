import React from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const FirstPage = () => {
  return (
    <div className='min-w-full'>

        <section className="min-h-screen bg-[url(/Background.jpg)]  bg-cover bg-center">
   <div id='home' className=" ">



<div className='flex flex-col  min-h-screen justify-center items-center   text-amber-100 '>
  <div className=' '>
      <p className='knewave-regular text-8xl'>Glam hour</p>
    <button className=' border-2 border-white rounded-2xl bg-red-500 w-24 text-white'>Buy Now</button>
  </div>
</div>
   </div>
        </section>


        <section id='about' className='bg-amber-600 min-h-screen text-amber-100  scroll-mt-16' >
            <AboutUs/>
        </section>
        <section id='contact' className=' bg-gray-800 min-h-screen scroll-mt-16'>
            <ContactUs/>
        </section>

    </div>
  )
}

export default FirstPage