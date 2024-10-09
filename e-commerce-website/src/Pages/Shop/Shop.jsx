import React from 'react'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { FaStar,FaStarHalfAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { userContext } from '../../Components/Context/useUserContext'

function Shop() {

    const {detailsShow,addToCart,shopProducts,filterCategory,allCategory,addToFavourite}=userContext()
    
    
  return (
    <>
        <div className='w-full sm:px-8  py-5 '>
            <h2 className='uppercase text-[32px] font-semibold px-5'># Shop</h2>
            <div className='max-w-full flex flex-col lg:flex-row mt-5 justify-center'>
               {/* left */}
               <div className='lg:w-1/4 w-full order-2 lg:order-1'>
                    <div className='border-4 border-gray-100 lg:w-[250px] w-full'>
                        <div className='max-w-full px-5 py-3 bg-gray-100'>
                            <h2 className='text-xl font-semibold uppercase text-center'>all categories</h2>
                        </div>
                        <div className=' w-full p-4'>
                            <ul className='max-w-full'>
                            <li onClick={()=>allCategory()} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># All</li>
                            
                                <li onClick={()=>filterCategory("laptop")} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># laptop</li>
                                <li onClick={()=>filterCategory("watch")} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># watch</li>
                                <li onClick={()=>filterCategory("mobile")} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># mobile</li>
                                <li onClick={()=>filterCategory("speaker")} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># speaker</li>
                                <li onClick={()=>filterCategory("headphones")} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># headphones</li>
                                <li onClick={()=>filterCategory("tv")} className='ml-5 mt-2 uppercase text-sm font-semibold cursor-pointer text-gray-600 hover:text-black delay-200'># tv</li>
                            </ul>
                        </div>
                    </div>
                    {/* baanner */}
                    <div className='mt-5 lg:w-[250px] w-full'>
                        <div>
                            <img src="/images/banner1.png" alt="" />
                        </div>
                    </div>
               </div>
               {/* right */}
               <div className='lg:w-[75%] w-full order-1 lg:order-2'>
                <div className='w-full'>
                    <div className='sm:block hidden'>
                        <img src="/images/shopBanner.png" alt=""
                        className='w-full h-[250px] object-cover'
                        />
                    </div>
                </div>
                {/* product */}
                <div className='w-full py-4 sm:px-5'>
                    <h2 className='uppercase text-2xl mt-3 text-gray-600 font-semibold px-4'>Shop Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 place-items-center '>
                        {
                            shopProducts.map((data)=>{
                                
                                return(
                                <div key={data.id}>
                                   
                                   <div className='lg:w-[200px] w-[300px]  h-[295px] px-3   border-4 border-gray-100 mt-5 ml-4
                                      bg-white overflow-hidden rounded-md group '
                                      >
                            <div className='flex relative justify-center  '>
                            <Link to={`${data.id}`} >
                                      <img src={data.img} alt=""
                                    className='w-[160px] h-[160px]  object-cover  '
                                        />
                                        </Link>
                              <div className='flex absolute flex-col  -right-20  group-hover:right-4 duration-200 '>
                                {/* show product */}
                                 <Link to={`${data.id}`}>
                                 <div 
                                 className='mt-3 shadow-md shadow-gray-500  p-3 bg-white z-40 
                                  text-secondary hover:bg-secondary hover:text-white duration-200'
                                  onClick={()=>detailsShow(data.id)}
                                  >
                                   <AiFillEye />
                                 </div>
                                 </Link>
                                

                                 {/* favourite */}
                                 <div className='mt-3 shadow-md  shadow-gray-500 p-3 bg-white z-40  text-secondary hover:bg-secondary hover:text-white duration-200'>
                                   <AiFillHeart 
                                   onClick={()=>addToFavourite(data)}
                                   />
                                 </div>
                              </div>     
                           </div>
                           <div className=' py-4 -mt-3 text-center'>
                    <h1 className='text-sm   uppercase tracking-wider'>{data.name}</h1>
                    <p className='text-secondary py-1 tracking-wide'>${data.price}</p>
                    <button 
                    onClick={()=>addToCart(data)}
                    className='text-center ml-3  px-4 py-2 bg-primary rounded-md cursor-pointer
                     hover:bg-secondary hover:text-white duration-200'>
                      Add to cart
                    </button>
                  </div>
                                </div>
                                   
                                </div>
                                )
                            })
                        }
                        <div>
                          
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Shop