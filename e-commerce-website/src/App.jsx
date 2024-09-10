import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
   

  </div>
  )
}

export default App