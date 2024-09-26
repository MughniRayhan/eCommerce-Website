import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Cart({cart,setCart}) {
const Increament = (product) =>{
  const exist = cart.find((x)=>{
    return x.id === product.id
  })
  setCart(cart.map((data)=>{
    return data.id === product.id ? {...exist, qty: exist.qty + 1} : data
  }))
}
// decrement quantity
const Decrement = (product) =>{
  const exist = cart.find((x)=>{
    return x.id === product.id
  })
  setCart(cart.map((data)=>{
    return data.id === product.id ? (data.qty!=1 ? {...exist, qty: exist.qty - 1 } : {...exist, qty:  1 }): data
  }))
}
  return (
    <div>
      <div className='w-full px-8 py-5'>
      <h3 className='text-[32px] uppercase font-semibold'>#cart</h3>
      {
        cart.length === 0 && 
        <div className='w-full text-center'>
          <h1 className='text-4xl uppercase font-semibold text-gray-600'>Your shopping cart is empty</h1>
          <Link to='/shop'>
          <button className='px-8 py-2 mt-4 bg-primary outline-none text-secondary font-semibold cursor-pointer'>
            Shop now
          </button>
          </Link>
        </div>
      }
        <div className='max-w-full px-5 py-4'>
         {
          cart.map((data)=>{
            return (
              <div key={data.id}>
                <div className='flex w-full border-2 border-gray-200 h-[250px] mt-4 px-8'>
                  <div>
                    <img src={data.img} alt=""
                    className='w-[270px] h-full'
                    />
                  </div>
                  {/* details */}
                  <div className='flex w-full  ml-32 items-center gap-20'>
                    <div >
                    <h4 className='uppercase text-sm text-gray-500 font-semibold'>{data.category}</h4>
                    <h3 className='mt-3 text-2xl uppercase font-semibold'>{data.name}</h3>
                    <p className='mt-1 uppercase text-gray-600'>Price: ${data.price}</p>
                    <p className='mt-1 uppercase text-gray-600'>Total: ${data.price * data.qty}</p>
                    </div>
                    
                    <div className='  flex'>
                      <button 
                      className='px-5 outline-none bg-primary font-semibold h-[40px] text-[16px] cursor-pointer'
                      onClick={()=>Increament(data)}>+</button>
                      <input type="number" value={data.qty}
                      className='w-[100px] border-2 border-primary h-[40px] px-4'
                      />
                      <button 
                      className='px-5 outline-none bg-primary font-semibold h-[40px] text-[16px] cursor-pointer'
                      onClick={()=>Decrement(data)}
                      >-</button>
                    </div>
                    <Link className=' h-[40px]  bg-secondary text-white p-4 font-semibold text-sm cursor-pointer'>
                      <AiOutlineClose />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
         }
        </div>
      </div>
    </div>
  )
}

export default Cart