
import { ThemeToggle } from './components/ThemeToggle'
import { Nav } from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import { EditUser } from './components/EditUser'
import { UserDetail } from './components/UserDetail'
import { UserForm } from './components/UserForm'
import { UserList } from './components/UserList'
import { UserProvider } from './context/UserProvider'


function App() {
 

  return (
    <>
    {/* <ThemeToggle>
      <UserProvider> */}
      <div>
        <div>
          <Nav/>

        </div>
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/add' element={<UserForm/>}></Route>
        <Route path='/user/:id' element={<UserDetail/>}></Route>
        <Route path='/user/:id' element={<EditUser/>}></Route>
      </Routes>
      </div>
      {/* </UserProvider>
    </ThemeToggle> */}
    </>
  )
}

export default App
