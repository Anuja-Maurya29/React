

import './App.css'
import { Parent1 } from './ChildTo Parent/Parent1'
import { Counter } from './components/Counter'
import { Mount } from './components/Mount'
import { UseEffect } from './components/useEffect'
import { UserefExample } from './components/UserefExample'
import {Child }from './ContextApi/Child'

import { GrandFather } from './PropsDrilling/GrandFather'
import { Routes,Route } from 'react-router-dom'
import { CounterReducer } from './UseReducer/CounterReducer'


function App() {
// const ref = useRef();
// const [name, setName] = useState()

// const [counter, setCounter] = useState(1)

// useEffect(()=>{
//   console.log('heloo print');
// })

// useEffect(()=>{
//   console.log('mountiung');
// },[])


// useEffect(()=>{
//   console.log('updating', name);
// },[name])

// useEffect(()=>{


  return (
    <>
 {/* <Parent/> */}
{/* <UserefExample/> */}
{/* <Parent1/> */}
{/* <Child/>
<Routes>
  <Route exact path='/child' element={<Child/>}></Route>
  <Route path="*" element={<></> }/>
</Routes> */}
{/* <GrandFather/> */}

{/* <Child/> */}

<CounterReducer/>  
</>
  )
}

export default App
