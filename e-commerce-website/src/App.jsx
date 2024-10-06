import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Rout from './Router/Rout'
import Footer from './Components/Footer/Footer'
import { UseContextProvider } from './Components/Context/useUserContext'

function App() {
 
  return (
    <UseContextProvider>
      <div>
      <BrowserRouter>
      <Navbar />
      <Rout />
      <Footer />
      </BrowserRouter>
  </div>
    </UseContextProvider>
  )
}

export default App