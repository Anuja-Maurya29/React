

import React from 'react'
import Component1 from './components/Component1'
import Component2 from './components/Component2'

const Conditinal = ({result}) => {

    if(result){

        return (
            <Component1/>
        )
    }
    else{
        return(
            <Component2/>
        )
    }


    
}
export default Conditinal