// test api 
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
const Test = () => {

    const[data,setData] = useState([])
   

    useEffect(()=>{

         const fetchdata = async()=>{
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos")
        if(response.ok)
        {

            const result =  await response.json();
            setData(result)
            // console.log(result);
        }
    
    }

        fetchdata();
        
    },[])


  return (
 <>
 

{
    data.map((obj)=>{

 return (
    <Card id={obj.id} title={obj.title} val={obj.completed}/>
 )
    })
}


 </>
  )
}

export default Test