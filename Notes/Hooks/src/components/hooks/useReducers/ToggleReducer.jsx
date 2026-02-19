export function ToggleReducer(state,action){
switch(action.type){
    case"toggle":
    return (state==="light")?"dark":"light";

    default:
        return state;
}

}