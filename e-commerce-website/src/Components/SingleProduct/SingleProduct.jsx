import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HomeProducts from '../HomeProducts';
import { FaStar,FaStarHalfAlt} from 'react-icons/fa';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { userContext } from '../Context/useUserContext';

function SingleProduct() {
  const {addToCart} = userContext()
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
      <div className='p-4 border-2 border-gray-200 sm:w-[400px] sm:h-[400px] mx-auto sm:mx-0'>
        <img src={products.img} alt=""
        className='w-[300px] h-[300px] mx-auto'
        />
      </div>
      <div className='lg:w-[600px] w-[200px] mt-4 mx-auto sm:mx-0 '>
        <h3 className='uppercase text-sm text-gray-500 font-semibold'>#{products.category}</h3>
        <h2 className='mt-3 md:text-2xl uppercase font-semibold'>{products.name}</h2>
        <p className='text-justify py-4 text-gray-500 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit nobis quidem ullam explicabo eligendi recusandae, tempora minima tempore numquam omnis maiores aut dolore enim dolores rerum. Qui deleniti labore pariatur itaque consequuntur quis sequi. Magnam praesentium saepe deleniti aspernatur modi ipsa mollitia ratione, odit, quibusdam, quisquam unde amet dolore temporibus enim quidem impedit! Culpa non dolorem rem vitae fugiat!
          </p>

          <div className='mt-3 text-primary flex gap-2 text-xl '>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt />
            
        </div>
        <h3 className='mt-2 text-secondary text-2xl '>${products.price}</h3>

        
        <button 
                    onClick={()=>addToCart(products)}
                    className='text-center   sm:px-20 px-5 py-3 bg-secondary text-white  cursor-pointer mt-4 font-semibold rounded-md
                     hover:bg-primary hover:text-gray-900 duration-200 flex justify-between items-center gap-2'>
                      <span>Add To Cart</span>
                      <span className='mt-1'> <FaArrowAltCircleRight /></span>
                    </button>
      </div>
      
    </div>
  )
}

export default SingleProduct