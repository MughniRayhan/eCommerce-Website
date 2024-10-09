import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
function Contact() {
  return (
    <div className='sm:px-10 py-8 w-full'>
        <h1 className='sm:text-3xl text-2xl uppercase font-semibold text-gray-500 text-center '>LEAVE US A MESSAGE</h1>
        <div className='px-5  py-5 max-w-full flex justify-center items-center'>
            <div className='sm:w-[500px] w-full bg-gray-100 sm:px-12 px-5 py-6 shadow-md shadow-gray-300 border-t-2 border-primary rounded-md'>
                
                    <h1 className='text-2xl text-secondary font-bold uppercase'>#Contact Us</h1>
                    <form className=' w-full '>

                        <div className='flex w-full gap-10  mt-6'>
                            <div>
                                <h4 className='font-semibold '>Name:</h4>
                            </div>
                            <div>
                                <input type="text" placeholder='Name'  required
                                className='px-5 py-2 sm:w-[300px] w-[200px] outline-none border-b-2 border-gray-500 bg-gray-100'
                                />
                            </div>
                        </div>

                        <div className='flex  sm:gap-10 gap-8 mt-5'>
                            <div>
                                <h4 className='font-semibold'>E-mail:</h4>
                            </div>
                            <div >
                                <input type="email" placeholder='Email' required
                                className='px-5 py-2 sm:w-[300px] w-[200px] outline-none border-b-2 border-gray-500 bg-gray-100'
                                />
                            </div>
                        </div>

                        <div className='flex  sm:gap-10 gap-5 mt-5'>
                            <div>
                                <h4 className='font-semibold'>Subject:</h4>
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' required
                                className='px-5 py-2 sm:w-[300px] w-[200px] outline-none border-b-2 border-gray-500 bg-gray-100'
                                />
                            </div>
                        </div>

                        <div className='flex  sm:gap-10 gap-3 mt-5'>
                            <div>
                                <h4 className='font-semibold'>Message:</h4>
                            </div>
                            <div>
                                <textarea name="" id="" placeholder='Message'
                                className='sm:px-5 py-2 sm:w-[300px] w-[200px] outline-none border-b-2 border-gray-500 bg-gray-100 resize-none'
                                ></textarea>
                            </div>
                        </div>
                        <button type='submit'
                        className='bg-primary font-semibold cursor-pointer rounded mt-5 px-10 py-2 hover:bg-secondary hover:text-white '
                        >
                            Send
                        </button>
                    </form>
                
            </div>
        </div>
      
         {/* map */}
      <div className='flex flex-col lg:flex-row mt-8 py-5 px-5   gap-20 justify-center'>
        <div className='lg:border-r-2 border-gray-300 pr-10 '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.06236002257!2d91.81983601868355!3d24.899980493077884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1728329809812!5m2!1sen!2sbd" 
            className='md:w-[500px] md:h-[400px] w-[300px] h-[300px]'  loading="lazy" ></iframe>
        </div>

        {/*  info */}
        <div className='px-4'>
           <h1 className='text-4xl uppercase text-gray-600 font-semibold '>Get in touch</h1>
           <p className='text-gray-500 mt-2'>We'd Love to Hear From You, Lets Get In Touch!</p>
           <div className='flex flex-col sm:flex-row gap-12 mt-8'>
               <div>
                <div>
                <h2 className='font-semibold '>Address</h2>
                <p className='mt-2 text-gray-600'>4005, Silver Business Point</p>
                </div>
                <div className='mt-4'>
                <h2 className='font-semibold '>Email</h2>
                <p className='mt-2 text-gray-600'>info@gmail.com</p>
                </div>
                <div className='mt-8'>
                <h2 className='font-semibold '>Social</h2>
                <div className='flex gap-4 mt-2 text-secondary '>
            <div className='rounded-full border  border-secondary w-8 h-8 grid place-items-center hover:bg-secondary hover:text-white duration-200'>
            <BiLogoFacebook />
            </div>
            <div className='rounded-full border border-secondary  w-8 h-8 grid place-items-center hover:bg-secondary hover:text-white duration-200'>
            <BiLogoTwitter />
            </div>
            <div className='rounded-full border border-secondary  w-8 h-8 grid place-items-center hover:bg-secondary hover:text-white duration-200'>
            <BiLogoInstagram />
            </div>
            <div className='rounded-full border border-secondary  w-8 h-8 grid place-items-center hover:bg-secondary hover:text-white duration-200'>
            <BiLogoYoutube />
            </div>
            </div>
                </div>
               </div>
               <div>
               <div >
                <h2 className='font-semibold '>Phone</h2>
                <p className='mt-2 text-gray-600'>+(012)99999999</p>
                </div>
                <div className='w-[300px] mt-10' >
                <h2 className='font-semibold '>Additional Information</h2>
                <p className='mt-2 text-gray-600'>We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                </div>
               </div>
           </div>
        </div>
      </div>


    </div>
  )
}

export default Contact