import React from 'react'
import { MyContext } from './Context';
import { Child } from './Child';
import { Header } from './Header';
import { Profile } from './Profile';

 export const GParent = () => {
const name="anuja",course="react";
  return (
  <>
    <div>Child</div>
    <MyContext.Provider value={{name,course}}>
        <Child/>
        <Header/>
        <Profile/>
    </MyContext.Provider>
  </>
  )
}
