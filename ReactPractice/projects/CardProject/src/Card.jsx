import React from "react"
import './App.css'
import { users } from "./userData"

export function Card(){
  
    return(
  
      <div className="container">

        {users.map((user)=>(  

          <div className="card">
          <div className="image">
            <img  id='img' src={user.img} alt="a girl photo" width={"180px"} height={"200px"} />
          </div>
          <div className="profile">
            <h1 className='name'>{user.name}</h1>
            <p className='tech'>{user.tech}</p>
          </div>
           <div className="button">
            <button className='follow' >Follow</button>
            <button className='msg' >Message</button>
           </div>

          </div>
        
        
        ))}

      </div>

    )

}
