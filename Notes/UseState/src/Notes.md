// useSTATE Notes
syntax:-
state - data useState -> let's u updates that data store data  in components 
const [state,setstate] = useState(initialVlaue)
state -> current state (ui state)
setState - > setter function to update state values
initilState -> initial state value 


setstate(updated value)

example:- batch updates
count=0
setState(count+1)
setState(count+1)
setState(count+1)
setState(count+1)
 result -> count:1 not count:4

 # 🚀 What Are Batch Updates in React?

Batching = React groups multiple state updates into a single re-render.

In simple words:

👉 If several setState calls happen inside the same event,
React does NOT re-render after each update.
Instead, it waits → groups → updates once → re-renders once.

This makes React faster and more efficient.

# concept of prev value 
used when new state value depends on old state values