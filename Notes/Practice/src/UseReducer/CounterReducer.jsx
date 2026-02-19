import React, { useReducer } from "react";

function CountReducer(state,action){

    switch(action.type)
    {
        case "inc":
        return {count :state.count+1};

        case "dec":
        return {count: state.count-1};

        case "reset":
        return {count:0};
        default:
            return{state}
    }

}
const style ={
    display:"flex",
    gap:"10px",
    
}
export function CounterReducer(){
const[state,Counterdispatch] = useReducer(CountReducer,{count:0})



    return(
<>
<p>Count:{state.count}</p>
<div className="button" style={style}>
<button onClick={()=>Counterdispatch({type:"inc"})}>INC</button>
<button onClick={()=> Counterdispatch({type:"dec"})}>DEC</button>
<button onClick={()=> Counterdispatch({type:"reset"})}>Reset</button>
</div>

</>
    )
}