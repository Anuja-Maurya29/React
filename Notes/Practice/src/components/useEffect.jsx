import React from 'react'

 import { useEffect } from 'react';

 export const UseEffect = () => {

useEffect(()=>{
    console.log(" useEffect running");
} ,[]);

  return (
      <div>useEffet example</div>
  )
}

