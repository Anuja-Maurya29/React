import { useReducer } from "react";
import { CounterReducers } from "./CounterReducers";
import { TodoReducer } from "./TodoReducers";
import { useState } from "react";
import { ToggleReducer } from "./ToggleReducer";

export function Usereducer() {
    const [task, setTask] = useState("");
  const [count, countDisptach] = useReducer(CounterReducers, 0);
  const [todo, todoDispatch] = useReducer(TodoReducer, []);
  const [toggle,toggleDispatch] = useReducer(ToggleReducer,"light")

  const theme =
    (toggle ==="light")?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}

    
    
    return (
    <>
      <div style={theme}>
        <h1>Counter:{count}</h1>
        <button onClick={() => countDisptach({ type: "inc", payload: 10 })}>
          INCREASE
        </button>
        <button onClick={() => countDisptach({ type: "dec", payload: 10 })}>
          DECREASE
        </button>
        <h2>todo</h2>
        <div className="todo">
          <input
            value={task}
            type="text"
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={() =>(
              
                todoDispatch({
                    type: "addTask",
                    payload: { id: Date.now(), task },
                }),
                setTask("") )
            }
            >
            ADD TASK
          </button>
          <ul>
            {todo.map((todo) => (
              <li key={todo.id}>
                {todo.task}
                <button
                  onClick={() =>
                    todoDispatch({ type: "delete", payload: { id: todo.id } })
                    
                }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <h2>Toogle button</h2>
        <button onClick={()=>toggleDispatch({type:"toggle"})}>Toggle Theme</button>
      </div>
    </>
  );
}


// export function Usereducer(){
    
// // const [count,setCount] =useState(0)
// // const [state, dispatch] = useReducer(reducer,initialState)
// let Timerid = useRef()
// const reducer =(state,action)=>{
//     if(action.type==="increase")
//     {
//         localStorage.setItem('counter', state+1)
//         return state+1;
//     }
//     if(action.type==="decrease")
//     {
//         return state-1;
//     }
//     if(action.type==="reset")
//     {
//         return state=0;
//     }

// }
// const Timerreducer =(state,action)=>{

//     if(action.type==="start")
//     {
//         // if(Timerid.current){

//             Timerid=setInterval(()=>{
//                 return state+1;
//             },1000)
//         // }
//     }

//     if(action.type==="stop")
//     {
//         clearInterval(Timerid);
//         return state ;
//     }
// }
// const[count,dispatch] = useReducer(reducer,0)
// const[timer,Timerdispatch] =useReducer(Timerreducer,0)
// console.log(useReducer(reducer , 1));

// console.log(localStorage.getItem('counter'));

//     return(
//         <>
//         <h1>Hello lets make counter using UseReducer</h1>
//         <p>Count:{count}</p>
//         <button onClick={()=>dispatch({type:"increase"})}>Increement</button>
//         <button onClick={()=>dispatch({type:"decrease"})}>Decreement</button>
//         <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
//         <h2>Now lets make timer</h2>

//         <p>Timer:{timer}</p>
//         <button onClick={()=>{Timerdispatch({type:"start"})}}>Start</button>
//         <button onClick={()=>{Timerdispatch({type:"stop"})}}>Stop</button>

//         </>

//     )
// }
