import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Rout from './Router/Rout'
import Footer from './Components/Footer/Footer'
import HomeProducts from './Components/HomeProducts'
import { UseContextProvider } from './Components/Context/useUserContext'

function App() {
  const [shopProducts,setShopProducts] = useState(HomeProducts);
  const [search,setSearch] = useState('');
  // const [cart,setCart] = useState([]);



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
  setShopProducts(searchFilter);
 }

// //  add to cart

// const addToCart = (product) =>{
//   const existProduct = cart.find((x)=>{
//     return x.id === product.id
//   })
//   if(existProduct){
//     alert("this product is already added to the cart")
//   }
//   else{
//     setCart([...cart,{...product, qty:1}])
//     alert("added to the cart")
//   }
 

// }

  return (
    <UseContextProvider>
      <div>
      <BrowserRouter>
      <Navbar 
      search={search} 
      setSearch={setSearch} 
      searchProduct={searchProduct}
      />

      <Rout 
      shopProducts={shopProducts}
      filterCategory={filterCategory}
      allCategory={allCategory}
      />

      <Footer/>
      </BrowserRouter>
   

  </div>
    </UseContextProvider>
  )
}

export default App