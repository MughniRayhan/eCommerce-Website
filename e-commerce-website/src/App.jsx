import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Rout from './Router/Rout'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Rout/>
      </BrowserRouter>
   

  </div>
  )
}

export default App