import React from 'react'
import { Link } from 'react-router-dom';
import HomeProducts from '../HomeProducts';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { userContext } from '../Context/useUserContext';

function ProductType() {
  const {addToCart,detailsShow,addToFavourite} = userContext()
 
  return (
    <div className='w-full sm:px-12  py-5'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3'>
      {/* new products */}
      <div className='w-[400px]  border-4 border-gray-100  overflow-hidden rounded-md '>
        <div className='bg-gray-100 w-full h-[50px] px-4 py-4'>
          <h2 className='text-lg font-semibold uppercase'>New Products</h2>
        </div>
        {
       HomeProducts.filter((x)=>
        {
          return x.type === 'new';
        }
        ).map((data)=>{
          return(
            <div key={data.id}>
              <div className='w-full  sm:px-4 px-2 py-4  border border-gray-100 flex gap-8'>
                <div >
                  <img src={data.img} alt=""
                  className='w-[100px] h-[100px] object-cover'
                  />
                </div>
                <div >
                  <h3 className='text-sm text-gray-600 font-semibold uppercase '>{data.name}</h3>
                  <p className='mt-1 text-secondary font-semibold '>${data.price}</p>
                  <div className='flex mt-1 sm:gap-6 gap-3'>
                   <Link to={`${data.id}`}> <button 
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiFillEye/></button></Link>
                    <button  onClick={()=>addToFavourite(data)}
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiFillHeart/></button>
                    <button onClick={()=>addToCart(data)}
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiOutlineShoppingCart/></button>
                  </div>
                </div>
              </div>
            </div>
          )
        }) 
        
    
        }
      
      </div>

      {/* featured product */}
      <div className=' w-[400px]  border-4 border-gray-100  overflow-hidden rounded-md'>
        <div className='bg-gray-100 w-full h-[50px] px-4 py-4'>
          <h2 className='text-lg font-semibold uppercase'>Featured Products</h2>
        </div>
        {
       HomeProducts.filter((x)=>
        {
          return x.type === 'featured';
        }
        ).map((data)=>{
          return(
            <div key={data.id}>
              <div className='w-full  sm:px-4 px-2 py-4  border border-gray-100 flex gap-8'>
                <div >
                  <img src={data.img} alt=""
                  className='w-[100px] h-[100px] object-cover'
                  />
                </div>
                <div >
                  <h3 className='text-sm text-gray-600 font-semibold uppercase '>{data.name}</h3>
                  <p className='mt-1 text-secondary font-semibold '>${data.price}</p>
                  <div className='flex mt-1 sm:gap-6 gap-3 '>
                  <Link to={`${data.id}`}> <button 
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiFillEye/></button></Link>
                    <button  onClick={()=>addToFavourite(data)}
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiFillHeart/></button>
                    <button onClick={()=>addToCart(data)}
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200  rounded-full'><AiOutlineShoppingCart/></button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        
    
        }
      
      </div>

      {/* top products */}
      <div className=' w-[400px]  border-4 border-gray-100  overflow-hidden rounded-md'>
        <div className='bg-gray-100 w-full h-[50px] px-4 py-4'>
          <h2 className='text-lg font-semibold uppercase'>Top Products</h2>
        </div>
        {
       HomeProducts.filter((x)=>
        {
          return x.type === 'top';
        }
        ).map((data)=>{
          return(
            <div key={data.id}>
              <div className='w-full  sm:px-4 px-2 py-4  border border-gray-100 flex gap-8'>
                <div >
                  <img src={data.img} alt=""
                  className='w-[100px] h-[100px] object-cover'
                  />
                </div>
                <div >
                  <h3 className='text-sm text-gray-600 font-semibold uppercase '>{data.name}</h3>
                  <p className='mt-1 text-secondary font-semibold '>${data.price}</p>
                  <div className='flex mt-1 sm:gap-6 gap-3 '>
                  <Link to={`${data.id}`}> <button 
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiFillEye/></button></Link>
                    <button  onClick={()=>addToFavourite(data)}
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiFillHeart/></button>
                    <button onClick={()=>addToCart(data)}
                    className='outline-none text-gray-500 px-4 py-4  border border-gray-200 cursor-pointer
                    hover:text-black hover:bg-gray-100 duration-200 rounded-full'><AiOutlineShoppingCart/></button>
                  </div>
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

export default ProductType