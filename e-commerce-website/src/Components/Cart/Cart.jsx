import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { userContext } from '../Context/useUserContext'

function Cart() {
  const {cart,setCart}=userContext()
  console.log(cart)
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

// removeProduct
const removeProduct = (product) =>{
  const exist = cart.find((x)=>{
    return x.id === product.id
  })
  if(exist.qty > 0){
    setCart(cart.filter((element)=>{
     return element.id !== product.id
    }))
  }
}

  return (
    <div>
      <div className='w-full px-8 py-5'>
      <h3 className='text-[32px] uppercase font-semibold'>#cart</h3>
      {
        cart.length === 0 && 
        <div className='w-full text-center'>
          <h1 className='sm:text-4xl text-xl uppercase font-semibold text-gray-500'>Your shopping cart is empty</h1>
          <Link to='/shop'>
          <button className='px-8 py-2 mt-4 bg-primary outline-none text-secondary
          hover:bg-secondary hover:text-white font-semibold cursor-pointer'>
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
                <div className='flex flex-col lg:flex-row w-full  border-2 border-gray-200 lg:h-[250px] h-[400px] mt-4 sm:px-8 px-2'>
                <div className='w-full flex justify-end lg:hidden items-end'>
                <Link 
                className=' font-semibold  cursor-pointer text-white bg-secondary py-
                h-[30px] w-[30px] mt-2   grid place-items-center ml-4 '
                onClick={()=>removeProduct(data)}
                >
                      <AiOutlineClose />
                    </Link>
                </div>
                  
                  <div>
                    <img src={data.img} alt=""
                    className='lg:w-[270px] lg:h-full w-[150px]  mx-auto'
                    />
                  </div>
                  {/* details */}
                  <div className='flex flex-col lg:flex-row w-full  lg:ml-32 items-center lg:gap-20 gap-5 -mt-5 lg:mt-0'>
                    <div >
                    <h4 className='uppercase text-sm text-gray-500 font-semibold'>{data.category}</h4>
                    <h3 className='mt-3 md:text-2xl uppercase font-semibold'>{data.name}</h3>
                    <p className='mt-1 uppercase text-gray-600'>Price: ${data.price}</p>
                    <p className='mt-1 uppercase text-gray-600'>Total: ${data.price * data.qty}</p>
                    </div>
                    
                    <div className='  flex '>
                      <button 
                      className='px-5 outline-none bg-primary font-semibold h-[40px] text-[16px] cursor-pointer'
                      onClick={()=>Increament(data)}>+</button>
                      <input type="number" value={data.qty}
                      className='lg:w-[100px] w-[100px] border-2 text-secondary border-primary h-[40px] px-4'
                      />
                      <button 
                      className='px-5 outline-none bg-primary font-semibold h-[40px] text-[16px] cursor-pointer'
                      onClick={()=>Decrement(data)}
                      >-</button>
                    </div>
                    <Link 
                    className=' h-[40px] lg:block hidden bg-secondary
                    text-white p-4 font-semibold text-sm cursor-pointer'
                    onClick={()=>removeProduct(data)}
                    >
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