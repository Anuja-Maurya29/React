import React from "react";

export  function Child({name,setname}){
function handleSubmit(event){
    event.preventDefault();
    console.log(name);
    alert("Name submitted as: " + name)
}

function handleInput(event){
    setname(event.target.value)
}
return(
<div>
    <form onSubmit={handleSubmit} >
<label> Name
    <input type="text" onInput={handleInput}  value={name}/>
    <button type="submit">Submit</button>
</label>
    </form>
</div>

)

}