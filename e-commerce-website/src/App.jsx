import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Rout from './Router/Rout'
import Footer from './Components/Footer/Footer'
import HomeProducts from './Components/HomeProducts'

function App() {
  const [shopProducts,setShopProducts] = useState(HomeProducts);
  const [search,setSearch] = useState('');



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


// search
 const searchProduct = () =>{
  const searchFilter = HomeProducts.filter((x)=>{
    return x.category === search;
  })
  setShopProducts(searchFilter)
 
 
 }

  return (
    <div>
      <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct}/>
      <Rout shopProducts={shopProducts} filterCategory={filterCategory} allCategory={allCategory}
      />
      <Footer/>
      </BrowserRouter>
   

  </div>
  )
}

export default App