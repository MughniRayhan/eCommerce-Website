import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from "react-router-dom";
import HomeProducts from '../HomeProducts';
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

function Home() {

const [trendingProducts, setTrendingProducts] = useState(HomeProducts)

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        cssEase: "ease-in-out",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    const  SlideList = [
        {
            id: 1,
            img: "/images/mobile.png",
            title:"Upto 50% off at your first order",
            description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis aspernatur itaque officia quasi, iste placeat asperiores, laboriosam esse inventore aliquam eligendi corporis iure labore. Quas expedita esse architecto?"
        },
        {
            id: 2,
            img: "/images/watch.png",
            title:"Upto 30% off at your first order",
            description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis aspernatur itaque officia quasi, iste placeat asperiores, laboriosam esse inventore aliquam eligendi corporis iure labore. Quas expedita esse architecto?"
        },
        {
            id: 3,
            img: "/images/laptop.png",
            title:"Upto 70% off at your first order",
            description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis aspernatur itaque officia quasi, iste placeat asperiores, laboriosam esse inventore aliquam eligendi corporis iure labore. Quas expedita esse architecto?"
        },
    ];

    // filter products
    const filterCategory = (category) =>{
      const filterProduct = HomeProducts.filter((data)=>{
        return data.type === category
      }) 
      setTrendingProducts(filterProduct)
    }
    
    const allTrending = () =>{
      setTrendingProducts(HomeProducts);
    }

  return (
   
       <div>
         <div className=' min-h-[400px] sm:min-h-[550px] bg-gray-100 w-full mx-auto pb-10'>
                  <Slider {...settings}>
                 {SlideList.map((data)=>(
                    <div key={data.id}>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 pt-12 px-8 place-items-center'>
                     <div className=' flex flex-col justify-center gap-4 ml-8 sm:pt-8   text-center sm:text-left order-2 sm:order-1   '>
                  <h1 className='text-2xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                  <p className='text-sm text-secondary py-4'>{data.description}</p>
                 <button className='flex justify-center mx-auto sm:mx-0 bg-primary mt-2 w-[150px] px-4 py-2
                 rounded-md font-semibold transition-all hover:text-primary hover:bg-secondary  hover:scale-105 duration-200
                 '>
                  <Link to="/shop" className='flex justify-between items-center gap-2'>
                  <span>Shop Now</span>
                  <span className='mt-1'> <FaArrowRight /></span>
                  </Link>
                 </button>
                     </div>
                     <div className='order-1 sm:order-2'>
                         <img src={data.img}  alt="" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-contain '/>
                     </div>
                     </div>
                    </div>

                   ))}
                 </Slider>
          </div>



          {/* trending products */}
           <div className='py-4 px-8 max-w-full'>
            <div className='flex w-full sm:flex-row flex-col '>
              {/*left  */}
              <div className='py-3 px-5 sm:w-[70%] w-full'>

                <div className='flex justify-between flex-col sm:flex-row gap-2 px-5 py-3 bg-gray-100 rounded-md max-w-[95%]  mt-2'>
                  <div className=' uppercase font-semibold '>
                    <h2 className='sm:text-xl text-lg'>Trending Products</h2>
                  </div>
                  <div className='flex  cursor-pointer gap-3 '>
                    <h3 onClick={()=>allTrending()} className='text-lg hover:text-secondary'>All</h3>
                    <h3 onClick={()=>filterCategory("new")} className='text-lg hover:text-secondary'>New</h3>
                    <h3 onClick={()=>filterCategory("featured")} className='text-lg hover:text-secondary'>Featured</h3>
                    <h3 onClick={()=>filterCategory("top")} className='text-lg hover:text-secondary'>Top Selling</h3>
                  </div>
                </div>
                 {/* products */}
                <div className='max-w-full  '>
                  <div className='flex flex-wrap w-full gap-4 '>
                     {
                      trendingProducts.map((data)=>{
                        return(
                           <>
                        <div key={data.id} 
                        className='sm:w-[200px] w-[300px]  h-[295px] px-3   border-4 border-gray-100 mt-5 ml-4
                         bg-white overflow-hidden rounded-md group '
                        >
                          <div className='flex'>
                            <img src={data.img} alt=""
                            className='w-[190px] h-[190px]  object-cover ml-10 sm:ml-0'
                            />
                            <div className='flex flex-col sm:ml-10 ml-28 sm:group-hover:-ml-8 group-hover:ml-0 duration-200 '>
                            <div className='mt-3 shadow-md shadow-gray-500  p-3 bg-white z-40  text-secondary hover:bg-secondary hover:text-white duration-200'>
                            <AiFillEye />
                            </div>
                           <div className='mt-3 shadow-md  shadow-gray-500 p-3 bg-white z-40  text-secondary hover:bg-secondary hover:text-white duration-200'>
                           <AiFillHeart />
                           </div>
                            </div>     
                          </div>
                          {/* info */}
                          <div className='ml-4 py-4 -mt-8'>
                            <h1 className='text-sm   uppercase tracking-wider'>{data.name}</h1>
                            <p className='text-secondary py-1 tracking-wide'>${data.price}</p>
                            <button 
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
                </div>
              </div>
              {/* right */}
              <div className='px-3 py-5 sm:w-[25%] w-full flex flex-col'>
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
                  <div className=' w-full flex justify-center items-center flex-col'>
                    <p className='text-center text-gray-500'>Join Our Mailing list</p>
                    <input type="email"  placeholder='Email'
                    className='mt-2 w-full px-2 py-2 outline-none border rounded border-gray-300 '
                    />
                    <button
                     className='text-center   w-[150px] py-2 bg-primary rounded mt-4 font-semibold
                     cursor-pointer hover:bg-secondary hover:text-white duration-200'
                    >Subscribe</button>
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
                  </div>
                </div>
               </div>
              </div>
            </div>
           </div>
       </div>
  
  )
}

export default Home