import React from 'react'
import { users } from '../../users'


 export const UserCard = () => {
  return (
   <>
<div className="grid  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-4  justify-items-center gap-10 lg:gap-6">
    {
        users.map((user)=>{

            
               return(
              <div key={user.id}>
            
            <div className='bg-amber-100 rounded-3xl mr-2.5 lg:m-12 md:m-6 sm:h-100 md:h-80 lg:h-80  sm:w-100  md:w-80 w-34 lg:w-80'>

                 <div className='bg-blue-500 rounded-xl  h-30 sm:w-100  md:w-80 w-34 lg:w-80 '>


            </div>
        <div className='flex  flex-col justify-center items-center '>
            <p className='sm:text-xl'>{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
        </div>
            </div>

           
              </div>

               ) 

            
        })
    }
</div>
   </>
  )
}

