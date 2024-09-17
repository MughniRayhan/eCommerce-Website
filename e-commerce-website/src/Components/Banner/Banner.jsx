import React from 'react'

function Banner() {
  return (
    <div className='px-8 py-4 w-full'>
        <div className='max-w-full flex sm:flex-row flex-col gap-4'>
            {/* left */}
            <div className='sm:w-[24%] w-full'>
             <div className='mt-4'>
                <img src="/images/ban1.png" alt="" className='h-[370px]'/>
             </div>
             <div className='mt-4'>
                <img src="/images/banner2.png" alt="" />
             </div>
            </div>
            {/* right */}
            <div className=' sm:w-3/4 w-full'>
                <div className='max-w-full flex flex-col gap-4 sm:flex-row justify-between mt-4'>
                    <img src="/images/banner3.png" alt="" className='w-[650px] h-[230px]'/>
                    <img src="/images/banner4.png" alt="" className='w-[400px] h-[230px]'/>
                </div>
                <div className=' mt-2'>
                    <img src="/images/ban.png" alt="" className='w-full object-cover h-[400px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner