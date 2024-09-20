import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Rout from './Router/Rout'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Rout/>
      <Footer/>
      </BrowserRouter>
   

  </div>
  )
}

export default App