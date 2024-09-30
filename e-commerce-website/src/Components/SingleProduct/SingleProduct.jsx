import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HomeProducts from '../HomeProducts';
import { FaStar,FaStarHalfAlt} from 'react-icons/fa';

function SingleProduct({addToCart}) {
    const {id} = useParams();
    
const [products,setProducts] = useState([]);
   
useEffect(()=>{
   try{
    const product = HomeProducts.filter((p)=> p.id == id);
    setProducts(product[0])
   }catch(e){
    console.log(e)
   }
},[id])
  
  return (
    <div  className='w-full flex flex-col sm:flex-row  gap-20 py-14  justify-center bg-white sticky z-0 pb-20'>
      <div className='p-4 border-8 border-gray-200 w-[300px] mx-auto sm:mx-0'>
        <img src={products.img} alt=""
        className='w-[270px] h-[270px]'
        />
      </div>
      <div className='lg:w-[700px] w-[400px] mt-4 mx-auto sm:mx-0'>
        <h3 className='uppercase text-sm text-gray-500 font-semibold'>#{products.category}</h3>
        <h2 className='mt-3 md:text-2xl uppercase font-semibold'>{products.name}</h2>
        <p className='text-justify mt-3 text-gray-500 text-sm font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magni provident cum nam. Dolor vel qui magni provident sed impedit tempora culpa iste corrupti quibusdam, quasi adipisci exercitationem sapiente itaque!</p>
        <h3 className='mt-2 text-secondary text-xl'>${products.price}</h3>

        <div className='mt-3 text-primary flex gap-2 text-xl '>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt />
            
        </div>
        <button 
                    onClick={()=>addToCart(products)}
                    className='text-center   px-10 py-2 bg-secondary text-white  cursor-pointer mt-4 font-semibold rounded
                     hover:bg-primary hover:text-gray-900 duration-200'>
                      Add To Cart
                    </button>
      </div>
      
    </div>
  )
}

export default SingleProduct