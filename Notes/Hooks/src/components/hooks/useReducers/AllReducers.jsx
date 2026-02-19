import { CounterReducers } from "./CounterReducers";
import { TodoReducer } from "./TodoReducers";
import { ToggleReducer } from "./ToggleReducer";
export function  AllReducers(state,action){
    return{
        counter:CounterReducers(state.count,action),
        todo:TodoReducer(state.todo,action),
        theme:ToggleReducer(state.theme,action)
    }

}