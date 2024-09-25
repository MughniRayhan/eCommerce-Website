import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
import Cart from '../Components/Cart/Cart'
function Rout({shopProducts,filterCategory,allCategory}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shop' element={<Shop shopProducts={shopProducts} filterCategory={filterCategory} allCategory={allCategory}/>} />
        </Routes>
    </div>
  )
}

export default Rout