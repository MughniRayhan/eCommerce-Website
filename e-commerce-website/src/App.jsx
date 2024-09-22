import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Rout from './Router/Rout'
import Footer from './Components/Footer/Footer'
import HomeProducts from './Components/HomeProducts'

function App() {
  const [shopProducts,setShopProducts] = useState(HomeProducts);
  // filter categories
  const filterCategory = (category) =>{
    const filteredProduct = HomeProducts.filter((product)=>{
      return product.category === category;
    })
    setShopProducts(filteredProduct);
  }

  // all category
  const allCategory = () =>{
    setShopProducts(HomeProducts);
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Rout shopProducts={shopProducts} filterCategory={filterCategory} allCategory={allCategory}/>
      <Footer/>
      </BrowserRouter>
   

  </div>
  )
}

export default App