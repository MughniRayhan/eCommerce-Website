import React from 'react'
import {Link} from "react-router-dom";
function Banner() {
  return (
    <div className='px-8 py-4 w-full'>
        <div className='max-w-full flex lg:flex-row flex-col gap-4'>
            {/* left */}
            <div className='lg:w-[24%] w-full grid sm:grid-cols-1 md:grid-cols-2 lg lg:grid-cols-1 '>
             <div className='mt-4'>
                <Link to="/shop"><img src="/images/ban1.png" alt="" className='h-[370px]  w-full md:w-[90%] lg:w-full '/></Link>
             </div>
             <div className='mt-4'>
             <Link to="/shop"><img src="/images/banner2.png" alt="" className='w-full md:h-full' /></Link>
             </div>
            </div>
            {/* right */}
            <div className=' lg:w-3/4 w-full'>
                <div className='max-w-full flex flex-col gap-4 md:flex-row justify-between mt-4'>
                <Link to="/shop"><img src="/images/banner3.png" alt="" className='lg:w-[650px] w-full h-[230px]'/></Link>
                <Link to="/shop"> <img src="/images/banner4.png" alt="" className='lg:w-[400px] w-full h-[230px]'/></Link>
                </div>
                <div className=' mt-2'>
                <Link to="/shop"> <img src="/images/ban.png" alt="" className='sm:w-full w-[650px] object-cover sm:h-[400px] h-[300px]'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner