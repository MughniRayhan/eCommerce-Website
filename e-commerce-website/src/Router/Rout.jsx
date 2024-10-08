import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
import Cart from '../Components/Cart/Cart'
import SingleProduct from '../Components/SingleProduct/SingleProduct'
import Contact from '../Pages/Contact/Contact'
import FavouriteProducts from '../Components/FavouriteProducts/FavouriteProducts'
import About from '../Pages/About/About'
function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/favourite' element={<FavouriteProducts/>}/>
            <Route path='/shop/:id' element={<SingleProduct />}/>
            <Route path='/:id' element={<SingleProduct />}/>
        </Routes>
    </div>
  )
}

export default Rout