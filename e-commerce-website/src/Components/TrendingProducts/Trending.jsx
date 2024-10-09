import React, { useEffect, useState } from 'react'
import HomeProducts from '../HomeProducts';
import { Link, NavLink } from 'react-router-dom';
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai'
import { FaStar,FaStarHalfAlt} from 'react-icons/fa';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { userContext } from '../Context/useUserContext';

function Trending() {

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false)
  const {isProductShowOpen,detail,trendingProducts,
    allTrending,filterProduct,closeDetail,detailsShow,addToCart,addToFavourite}=userContext()


  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    setIsSubscribed(true); // Shows the modal
  };

    const allProducts = () =>{
        allTrending();
    }
   
    const filterProducts = (category) =>{
      filterProduct(category)
    }
    
   
  return (
    

    <div className='py-4 px-8 max-w-full'>
     
    <div className='flex w-full lg:flex-row flex-col '>
      {/*left  */}
      <div className='py-3 px-5 lg:w-[70%]  w-full'>

        <div className='flex justify-between flex-col sm:flex-row gap-2 px-5 py-3 sm:bg-gray-100 rounded-md sm:max-w-[95%] max-w-full mt-2'>
          <div className=' uppercase font-semibold '>
            <h2 className='sm:text-xl text-lg'>Trending Products</h2>
          </div>
          <div className='flex flex-wrap cursor-pointer gap-3  sm:text-lg '>
            <h3 onClick={()=>allProducts()} className=' hover:text-secondary'>All</h3>
            <h3 onClick={()=>filterProducts("new")} className=' hover:text-secondary'>New</h3>
            <h3 onClick={()=>filterProducts("featured")} className=' hover:text-secondary'>Featured</h3>
            <h3 onClick={()=>filterProducts("top")} className=' hover:text-secondary'>Top Selling</h3>
          </div>
        </div>
         {/* products */}
        <div className='max-w-full flex justify-center flex-col ' >
          <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 '>

             {
              
              trendingProducts.slice(0,8).map((data)=>{
                return(
                   <>
        
        <div key={data.id} 
                className='lg:w-[200px] w-[300px]  h-[295px] sm:px-3   border-4 border-gray-100 mt-5 sm:ml-4
                 bg-white overflow-hidden rounded-md group '
                >
                  <div className='flex relative justify-center '>
                  <Link to={`${data.id}`}>
                  <img src={data.img} alt=""
                    className='w-[150px] h-[150px]  object-cover  '
                    /></Link>
                    <div className='flex absolute flex-col  -right-20  group-hover:right-4 duration-200 '>
                      {/* product show */}
                    <div 
                    className='mt-3 shadow-md shadow-gray-500  p-3 bg-white z-40  text-secondary
                    hover:bg-secondary hover:text-white duration-200'
                    onClick={()=>detailsShow(data.id)}
                    >
                    <AiFillEye />
                    </div>
                    {
            isProductShowOpen && 
            <div 
            className='lg:w-[900px] lg:h-[400px]  w-full h-full  sm:w-[600px] overflow-hidden  bg-white fixed z-50 sm:top-[35%] top-0 md:left-[20%] left-0 
             shadow-gray-500 shadow-lg  rounded-md px-8  py-8 scroll-m-8 pb-10 '>
              <div 
              className='flex justify-end'
              onClick={()=>closeDetail()}>
                <AiOutlineClose/>
              </div>
      <div className='flex flex-col sm:flex-row justify-center sm:gap-5  sm:mt-5  pb-8'>
      <div className='  sm:w-[300px]  sm:h-[300px]  sm:border-4 border-gray-200 sm:p-3  mx-auto '>
        <img src={detail.img} alt=""
        className='sm:w-[270px] sm:h-[270px] w-[150px] h-[150px]  object-cover'
        />
      </div>
      <div className='lg:w-[400px] sm:w-[200px] sm:mt-4  mx-auto sm:mx-0 pb-8 -mt-4 grid place-items-center py-4 '>
        <h3 className='uppercase text-sm text-gray-500 font-semibold'>#{detail.category}</h3>
        <h2 className='sm:mt-3 mt-1 md:text-2xl text-sm uppercase font-semibold'>{detail.name}</h2>
        <p className='text-justify sm:mt-3 text-gray-500 text-sm font-semibold '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magni provident cum nam. Dolor vel qui magni provident sed impedit tempora culpa iste corrupti quibusdam, quasi adipisci exercitationem sapiente itaque!</p>
        <h3 className='mt-2 text-secondary sm:text-xl'>${detail.price}</h3>

        <div className='mt-3 text-primary flex gap-2 sm:text-xl '>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt />
            
        </div>
        <button 
                    onClick={()=>addToCart(detail)}
                    className='text-center   sm:px-10 px-5 py-2 bg-secondary text-white  cursor-pointer mt-4 font-semibold rounded
                     hover:bg-primary hover:text-gray-900 duration-200 '>
                      Add To Cart
                    </button>
      </div>
      </div>

            </div>
      }
                    
                    {/*favourite */}
                   <div 
                   className='mt-3 shadow-md  shadow-gray-500 p-3 bg-white z-40 
                    text-secondary hover:bg-secondary hover:text-white duration-200'
                    onClick={()=>addToFavourite(data)}>
                   <AiFillHeart />
                   </div>
                    </div>     
                  </div>
                  {/* info */}
                  <div className='grid place-items-center py-4 '>
                    <h1 className='text-sm   uppercase tracking-wider'>{data.name}</h1>
                    <p className='text-secondary py-1 tracking-wide'>${data.price}</p>
                    <button 
                    onClick={()=>addToCart(data)}
                    className='text-center ml-3  px-4 py-2 bg-primary rounded-md cursor-pointer hover:bg-secondary hover:text-white duration-200'>
                      Add to cart
                    </button>
                  </div>
                </div>
       
                </>
                )
              })
             }
            
          </div>
            {/* show more */}
          <div className='flex justify-center'
          onClick={()=>setIsShowMore(!isShowMore)}
          >
            {
              isShowMore ? 
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 '>
              {
                trendingProducts.slice(8,12).map((data)=>{
                  return (
                    <div key={data.id} 
                    className='lg:w-[200px] w-[300px]  h-[295px] sm:px-3   border-4 border-gray-100 mt-5 sm:ml-4
                     bg-white overflow-hidden rounded-md group '
                    >
                      <div className='flex relative justify-center '>
                      <Link to={`${data.id}`}>
                      <img src={data.img} alt=""
                        className='w-[150px] h-[150px]  object-cover '
                        /></Link>
                        <div className='flex absolute flex-col  -right-20  group-hover:right-4 duration-200 '>
                        <div 
                        className='mt-3 shadow-md shadow-gray-500  p-3 bg-white z-40 
                         text-secondary hover:bg-secondary hover:text-white duration-200'
                         onClick={()=>detailsShow(data.id)}
                         >
                        <AiFillEye />
                        </div>
                        {/* favourite */}
                       <div 
                       className='mt-3 shadow-md  shadow-gray-500 p-3 bg-white z-40 
                        text-secondary hover:bg-secondary hover:text-white duration-200'
                        onClick={()=>addToFavourite(data)}
                        >
                       <AiFillHeart />
                       </div>
                        </div>     
                      </div>
                      {/* info */}
                      <div className='grid place-items-center py-4 '>
                        <h1 className='text-sm   uppercase tracking-wider'>{data.name}</h1>
                        <p className='text-secondary py-1 tracking-wide'>${data.price}</p>
                        <button 
                        onClick={()=>addToCart(data)}
                        className='text-center ml-3  px-4 py-2 bg-primary rounded-md cursor-pointer hover:bg-secondary hover:text-white duration-200'>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  )
                })
              }
              </div>
              :
              <button  className='text-center   px-4 py-2 bg-secondary text-white rounded
              w-[150px] mx-auto mt-5 cursor-pointer hover:bg-primary hover:text-white duration-200'>Show More</button>
            }
           </div>
        </div>
      </div>













      {/* right */}
      <div className='px-3 py-5 lg:w-[25%] w-full flex flex-col'>
       <div className='w-full'>
        {/* testimonial */}
        <div className='w-full  border-4 border-gray-100 rounded'>
          <div className='py-2 rounded-md w-full bg-gray-100 '>
            <h3 className='text-center text-xl font-semibold uppercase mt-5 '>
              Our Testimonial
            </h3>
          </div>
          <div className='px-3 py-5'>
            <div className='flex justify-center'>
              <img src="/images/testimonial.png" alt=""
              className='h-[150px] w-[200px]'
              />
            </div>
            <div className='mt-4 text-center'>
              <h3 className='text-xl font-semibold uppercase'>stephan robot</h3>
              <h4 className='text-secondary  uppercase py-2'>web  desighner</h4>
              <p className='text-gray-600 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad nobis earum aperiam ducimus!</p>
            </div>
          </div>
        </div>
        {/* newsLetter */}
        <div className='w-full pb-8 px-4 mt-5 rounded bg-gray-100'>
        <div className='py-2 md w-full '>
            <h3 className='text-center text-xl font-semibold uppercase mt-5 '>
              NewsLetter
            </h3>
          </div>
          {/* form */}
          <form onSubmit={handleSubmit}  className=' w-full flex justify-center items-center flex-col'>
            <p className='text-center text-gray-500'>Join Our Mailing list</p>
            <input type="email" placeholder="Email" required
            className='mt-2 w-full px-2 py-2 outline-none border rounded border-gray-300 '
            />
           
            <button type="submit" onClick={()=>setIsSubscribed(!isSubscribed)}
             className='text-center   w-[150px] py-2 bg-primary rounded mt-4 font-semibold
             cursor-pointer hover:bg-secondary hover:text-white duration-200'
            > {isSubscribed ?
              "Subscribed" : "Subscribe"
            }</button>
            
            {/* social links */}
            <div className='flex gap-4 mt-4 text-secondary '>
            <div className='rounded-full border border-secondary p-4 hover:bg-secondary hover:text-white duration-200'>
            <BiLogoFacebook />
            </div>
            <div className='rounded-full border border-secondary p-4 hover:bg-secondary hover:text-white duration-200'>
            <BiLogoTwitter />
            </div>
            <div className='rounded-full border border-secondary p-4 hover:bg-secondary hover:text-white duration-200'>
            <BiLogoInstagram />
            </div>
            <div className='rounded-full border border-secondary p-4 hover:bg-secondary hover:text-white duration-200'>
            <BiLogoYoutube />
            </div>
            </div>
          </form>
        </div>
       </div>
      </div>
    </div>
   </div>
  )

}

export default Trending