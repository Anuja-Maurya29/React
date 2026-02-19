
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { increment,decrement,reset } from './features/CounterSlice'
import './App.css'

function App() {
  // const[count,setCount]= useState(0)
  const dispatch = useDispatch()
  const value = useSelector((state)=>state.counter.value)


  return (
    <>
      <p>Counter:{value}</p>
      <button onClick={()=>dispatch(increment())}>inc</button>
        <button onClick={()=>dispatch(decrement())}>dec</button>
          <button onClick={()=>dispatch(reset())}>reset</button>

    </>
  )
}

export default App
