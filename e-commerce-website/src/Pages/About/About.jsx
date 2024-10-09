import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { FaNfcDirectional } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";

function About() {
  return (
    <div className='w-full px-8 py-5 '>
            <h2 className='uppercase text-[32px] font-semibold'># About Us</h2>
            <div className='flex flex-col sm:flex-row gap-12 mt-8 justify-center'>
                <div className=' border border-gray-200 bg-gray-100 px-8 py-5'>
                   <img src="/images/watch.png" alt="" 
                   className='md:w-[400px] md:h-[400px]'
                   />
                </div>
                <div className='sm:w-[50%] w-full'>
                      <h1 className='text-4xl uppercase font-semibold text-gray-700'>We Have Everything You Need ?</h1>
                      <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe eius, at sed alias quibusdam? Fugiat, ea deleniti nisi porro itaque maxime vero quam officiis ex possimus et placeat esse.</p>
                      <div className='py-5'>
                        <h3 className=' font-semibold mt-5'>Our Product List</h3>
                        <div>
                            <ul className='text-gray-600 mt-2 text-md'>
                                <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                                <li>Dummy text used in laying out print, graphic or web designs</li>
                                <li>The passage is attributed to.</li>
                                <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                                <li>Dummy text used in laying out print, graphic or web designs</li>
                            </ul>
                            
                        </div>
                       <Link to='/contact'>
                       <button 
                       className='uppercase bg-primary px-5 py-2 rounded mt-8 hover:bg-secondary hover:text-white flex justify-between items-center gap-2'
                       >
                            <span>Contact Us</span>
                            <span className='mt-1'> <FaArrowRight /></span>
                        </button>
                        </Link> 
                      </div>
                </div>
            </div>

            {/* services */}
            <div className='mt-10 py-5 px-8'>
                <h1 className='text-center font-semibold text-3xl'>Our Services</h1>
                <div className='flex flex-col md:flex-row justify-center mt-5 py-5 gap-8'>
                    <div className='md:w-[25%] text-center '>
                    <CiTimer className='text-5xl text-gray-500 mx-auto'/>
                    <h2 className='font-semibold text-secondary text-xl py-2'>FREE RESOURCES</h2>
                    <p className='text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    </div>

                    <div className='md:w-[25%] text-center '>
                    <FaNfcDirectional  className='text-5xl text-gray-500 mx-auto'/>
                    <h2 className='font-semibold text-secondary text-xl uppercase py-2'>Multi purposes</h2>
                    <p className='text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    </div>

                    <div className='md:w-[25%] text-center '>
                    <IoBulbOutline className='text-5xl text-gray-500 mx-auto'/>
                    <h2 className='font-semibold text-secondary text-xl py-2'>FULLY RESPONSIVE</h2>
                    <p className='text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default About