import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
import Cart from '../Components/Cart/Cart'
function Rout({shopProducts,filterCategory,allCategory,addToCart,cart,setCart}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home addToCart={addToCart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='/shop' element={
              <Shop 
              shopProducts={shopProducts} 
              filterCategory={filterCategory} 
              allCategory={allCategory} 
              addToCart={addToCart}
              />
            }
            />
        </Routes>
    </div>
  )
}

export default Rout