import React from 'react'
import { FaHeadphonesAlt, FaPhone, FaPiggyBank, FaShippingFast, FaWallet } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {

const accountInfo = [
    {
        id: 1,
        link:'/about',
        title:"About us",
    },
    {
        id: 2,
        link:'/',
        title:"Secure Payment",
    },
    {
        id: 3,
        link:'/contact',
        title:"Contact Us",
    },
    {
        id: 4,
        link:'/shop',
        title:"Best Sales",
    },
]

const productInfo = [
    {
        id: 5,
        link:'/',
        title:"Delivery",
    },
    {
        id: 6,
        link:'/about',
        title:"Legal Notice",
    },
    {
        id: 7,
        link:'/',
        title:"Prices Drop",
    },
    {
        id: 8,
        link:'/shop',
        title:"New Products",
    },
]

const contctInfo = [
    {
        id: 9,
        icon:<FaLocationDot/>,
        title:"4005, Silver Business Point ",
    },
    {
        id: 10,
        icon:<FaPhone/>,
        title:"+(012)99999999",
    },
    {
        id: 11,
        icon:<MdEmail/>,
        title:"mughnirayhan22@gmail.com",
    },
    
]


  return (
    <div>
        <div className='w-full px-10 py-8 bg-gray-100 '>
        <div className='flex flex-col lg:flex-row max-w-full'>
            {/* left */}
            <div className='lg:w-1/4  w-full px-5 py-5 lg:border-r-2 border-r-gray-300 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
                <div className='flex  px-5 py-3 mt-3 '>
                    <div className="text-[22px] text-secondary">
                        <FaPiggyBank/>
                    </div>
                    <div className='ml-3'>
                        <h3 className='uppercase text-base text-secondary font-semibold '>
                            Great Saving
                        </h3>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className='flex  px-5 py-3 mt-3 '>
                    <div className="text-[22px] text-secondary">
                        <FaShippingFast/>
                    </div>
                    <div className='ml-3'>
                        <h3 className='uppercase text-base text-secondary font-semibold '>Free delivery 
                        </h3>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className='flex px-5 py-3 mt-3 '>
                    <div className="text-[22px] text-secondary">
                        <FaHeadphonesAlt/>
                    </div>
                    <div className='ml-3'>
                        <h3 className='uppercase text-base text-secondary font-semibold '>
                            24X7 support
                        </h3>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className='flex  px-5 py-3 mt-3 '>
                    <div className="text-[22px] text-secondary">
                        <FaWallet/>
                    </div>
                    <div className='ml-3'>
                        <h3 className='uppercase text-base text-secondary font-semibold '>
                            Money Back
                        </h3>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='lg:w-[70%] w-full px-5 py-3 '>
                <div className='text-center w-full'>
                    <img src="/images/logo.png" alt="" 
                    className='h-[50px] object-cover mx-auto'
                    />
                    <p className='text-sm text-gray-500 font-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque cumque, facere veniam ut eos.</p>
                </div>
                <div className='flex justify-between md:flex-row flex-col mt-5 w-full px-8 py-5'>
                    <div className='px-5 py-4'>
                        <h3 className='uppercase font-semibold  text-base '>Your Account</h3>
                        <ul className='mt-3 flex flex-col gap-2'>
                            {accountInfo.map((data)=>(
                               <Link 
                               key={data.id}
                               to={data.link}
                               className='text-gray-600 text-sm hover:text-secondary cursor-pointer'
                               >
                                {data.title}
                               </Link>
                            ))}
                        </ul>
                    </div>
                    <div className='px-5 py-4'>
                        <h3 className='uppercase font-semibold text-base '>Products</h3>
                        <ul className='mt-3 flex flex-col gap-2'>
                           
                            {productInfo.map((data)=>(
                               <Link 
                               key={data.id}
                               to={data.link}
                               className='text-gray-600 text-sm hover:text-secondary cursor-pointer'
                               >
                                {data.title}
                               </Link>
                            ))}
                        </ul>
                    </div>
                    <div className='px-5 py-4'>
                        <h3 className='uppercase font-semibold text-base '>STORE INFORMATION</h3>
                        <ul className='mt-3 flex flex-col gap-5'>
                             {contctInfo.map((data)=>(
                              <div key={data.id} className='flex gap-2'>
                                <div className='text-secondary text-[20px]'>
                                    {data.icon}
                                </div>
                                <Link
                               className='text-gray-600 text-sm hover:text-secondary cursor-pointer'
                               >
                                {data.title}
                               </Link>
                              </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <div className='mt-8 w-full'>
        <div className='text-center text-gray-200 py-4 bg-stone-900'>
            &copy;  Electronic Store , 2024
        </div>
    </div>
    </div>
  )
}

export default Footer
