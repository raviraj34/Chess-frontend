
import './App.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Game } from './pages/Game'

const router  = createBrowserRouter([
  {
    path:"/",
    element:<Landing />
  },
  {
    path:"/game",
    element:<Game />
  }
])



function App() {
  

  return <RouterProvider router={router}>

  
  </RouterProvider> 

}

export default App
