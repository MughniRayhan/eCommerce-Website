import React from 'react'
import { AiFillDelete, AiOutlineClose,AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { userContext } from '../Context/useUserContext'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

function FavouriteProducts() {
    const {favourite,setFavourite,addToCart}=userContext()
    console.log(favourite)
     
    
    // removeProduct
    const removeProduct = (product) =>{
     
      
        setFavourite(favourite.filter((element)=>{
         return element.id !== product.id
        }))
      
    }
    
      return (
        <div>
          <div className='w-full sm:px-8 px-3 py-5'>
         <div className='px-8'>
         <h3 className='text-[32px] uppercase font-semibold'>#favourite</h3>
          {
            favourite.length === 0 && 
            <div className='w-full text-center mt-8 pb-10'>
              <h1 className='sm:text-4xl text-xl uppercase font-semibold text-gray-500'>Your wish list is empty</h1>
              <Link to='/shop'>
              <button className='px-8 py-2 mt-4 bg-primary outline-none text-secondary
              hover:bg-secondary hover:text-white font-semibold cursor-pointer'>
                Shop now
              </button>
              </Link>
            </div>
          }
         </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full  '>
             {
              favourite.map((data)=>{
                return (
                  <div key={data.id} 
                className=' w-[300px]  h-[295px] px-3   border-4 border-gray-100 mt-5 ml-4
                 bg-white overflow-hidden rounded-md group '
                >

<div className='flex relative  justify-center'>
                  
                  <img src={data.img} alt=""
                    className='w-[150px] h-[150px]  object-cover '
                    />
                    <div className='flex absolute flex-col  -right-20  group-hover:right-4 duration-200 '>
                      {/* product show */}
                   
                    
                   {/*remove*/}
                   <div 
                   className='mt-3 shadow-md  shadow-gray-500 p-3 bg-white z-40 
                    text-secondary hover:bg-secondary hover:text-white duration-200'
                    onClick={()=>removeProduct(data)}>
                   <AiFillDelete />
                   </div>
                    </div>     
                  </div>
                  {/* info */}
                  <div className='grid place-items-center py-4 '>
                    <h1 className='text-sm   uppercase font-semibold tracking-wider'>{data.name}</h1>
                    <p className='text-secondary py-1 tracking-wide'>${data.price}</p>
                    <button 
                    onClick={()=>addToCart(data)}
                    className='text-center ml-3  px-4 py-2 bg-primary rounded-md cursor-pointer hover:bg-secondary hover:text-white duration-200'>
                      Add to cart
                    </button>
                  </div>




















{/* 


                  
                    <div className='flex flex-col lg:flex-row w-full  border-2 border-gray-200 lg:h-[250px] h-[400px] mt-4 px-8'>
                    <div className='w-full flex justify-end lg:hidden'>
                    <Link 
                    className=' font-semibold text-xl cursor-pointer text-white bg-secondary py-
                    h-[40px] w-[40px] mt-2   grid place-items-center ml-4'
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
                      {/* <div className='flex flex-col lg:flex-row w-full  lg:ml-32 items-center lg:gap-20 gap-5 -mt-5 lg:mt-0'>
                        <div >
                        <h4 className='uppercase text-sm text-gray-500 font-semibold'>{data.category}</h4>
                        <h3 className='mt-3 md:text-2xl uppercase font-semibold'>{data.name}</h3>
                        <p className='mt-1 uppercase text-gray-600'>Price: ${data.price}</p>
                        </div>
                        
                       
                        <Link 
                        className=' h-[40px] lg:block hidden bg-secondary
                        text-white p-4 font-semibold text-sm cursor-pointer'
                        onClick={()=>removeProduct(data)}
                        >
                          <AiOutlineClose />
                        </Link>
                      </div> 
                    </div> */}
                  </div>
                )
              })
             }
            </div>
          </div>
        </div>
      )
}

export default FavouriteProducts
