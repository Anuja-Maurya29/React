import React from "react";
import { users } from "./Data";
import { Link } from "react-router-dom";


export function Users(){

    return(
        <>
        <div>
        
            <h1>Users List</h1>
          {users.map((user)=>{

            <Link to={`/user/${user.id}`}>user.name</Link>
          }

          )}

        </div>
        </>
    )
}
