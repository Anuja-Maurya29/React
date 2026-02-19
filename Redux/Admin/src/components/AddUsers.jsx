import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addUser } from '../features/AddReducer'
import { deleteUser } from '../features/AddReducer'




const AddUsers = () => {

    const [user,setUser] = useState("")
    const[data, setData] = useState([])
    function HandleName(event){
        setUser(event.target.value) 
        setData(user) 
    }


    const dispatch = useDispatch();
    const list = useSelector((state)=> state.Users.dataList)
  
  return (
<>
    <div>AddUsers</div>
    <div className="input">
        <input type="text"
         placeholder='Enter user'
         value={user}
         
         onChange={HandleName}  />
         <button onClick={()=> {
          dispatch(addUser(data))
          setUser("")
         }}>ADD</button>
         <ul>
            {list.map((name,index)=>(
                <li key={index}>{name}
                <button onClick={()=>dispatch(deleteUser(index))}>DELETE</button>
                </li>
            ))}
         </ul>
    </div>
</>

  )
}

export default AddUsers