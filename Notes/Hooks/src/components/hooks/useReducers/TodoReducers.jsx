export function TodoReducer(state,action){

switch(action.type){
    case "addTask":

        return [...state,action.payload];

        case "delete":
            return state.filter((todo)=>todo.id!==action.payload.id);
            default:
                return state;

}

}