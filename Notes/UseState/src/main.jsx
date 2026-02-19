import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { myStore } from './app/Store.jsx'

createRoot(document.getElementById('root')).render(
  
<Provider store ={myStore} >

    <App />
</Provider>


  
)
