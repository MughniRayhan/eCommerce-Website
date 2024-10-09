import React, {useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from "react-router-dom";
import HomeProducts from '../../Components/HomeProducts';
import Trending from '../../Components/TrendingProducts/Trending';
import Banner from '../../Components/Banner/Banner';

import ProductType from '../../Components/ProductType/ProductType';
import { userContext } from '../../Components/Context/useUserContext';

function Home() {



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

    

  return (
   
       <div>
         <div className=' min-h-[400px] sm:min-h-[550px] bg-gray-100 w-full mx-auto pb-10'>
                  <Slider {...settings}>
                 {SlideList.map((data)=>(
                    <div key={data.id}>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 pt-12 px-8 place-items-center w-full'>
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
          
          <Trending />
          <Banner/>
         <ProductType/>
       </div>
  
  )
}

export default Home