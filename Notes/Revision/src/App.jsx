
import './App.css'
import { Input } from './component/Inputs/Input'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Counter } from './component/Inputs/Counter'
import { Home } from './component/Inputs/Home'
import { Dashboard } from './component/Dashboard'
function App() {

  const router =createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/input",
      element:<Input/>
  
    },
    {
      path:"/counter",
      element:<Counter/>
    }
  ])

  return (
    <>
{/* <div>
  <h1>hello</h1>
<nav>
  <Link to="/input">Input</Link>
  <Link to="/counter">Counter</Link>
</nav>

<RouterProvider router={router}/>
</div> */}
<Dashboard/>
    </>
  )
}

export default App
