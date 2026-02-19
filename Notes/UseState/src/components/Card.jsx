import React from 'react'

const Card = ({id,title}) => {

  return (
    <>
    <div className=' grid grid-cols-3 grid-rows-3 m-2'>

   <div href="#" class=" bg-neutral-primary-soft block max-w-sm p-3 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading leading-8">{id}</h5>
    <p class="text-body">{title}</p>  
</div>
    </div>
    </>
  )
}

export default Card