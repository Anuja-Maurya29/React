import React from "react";

 export const User =()=>{
    // const arr =[10,20,30];
    const arr =[{user:"Anuja",age:21},{user:"Archi",age:21}, {user:"Aditi",age:22}];

    return(

<div className="user">

    {arr.map( function(data){
 return <div>
    {data.user}</div>
    })}

    {/* <div style={{color:"white"}}>{arr[0]}</div>
        <div style={{color:"white"}}>Archi</div>
          <div style={{color:"white"}}>Aditi</div> */}

</div>
    )
}