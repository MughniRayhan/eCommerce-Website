import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn} from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { loginWithRedirect , logout, user, isAuthenticated } = useAuth0();
  return (
    <div className='w-full'>
        {/* top_header */}
        <div className='max-w-full flex gap-2 px-2.5 py-2.5 bg-slate-100'>
          <div className='mt-1 text-xl ml-5 text-gray-500'>
          < MdLocalShipping/>
          </div>
          <div className=' text-gray-500  '>
            <p>Free Shipping When Shopping upto $1000</p>
          </div>
        </div>

        {/* mid-header */}
        <div className='flex py-4 px-8 justify-between max-w-full '>
            {/* logo */}
            <div className='flex flex-row gap-1' >
                <img src="/images/logo.png" alt="" 
                className='h-[45px] w-[45px] object-cover'
                />
               <div className='flex flex-col  font-bold '>
               <span className='text-2xl'>Electronic</span>
               <span className='text-secondary text-xl -mt-3'>Shop</span>
               </div>
            </div>
            {/* searchBox */}
            <div className=' justify-center sm:flex hidden '>
                <input type="text" value='' placeholder='Search'
                className='px-2 outline-none rounded-l-md bg-slate-100 
                w-[300px] h-[40px] '
                />
                <button className=' outline-none rounded-r-md bg-secondary w-[55px] h-[40px] text-white 
                 cursor-pointer grid place-items-center hover:bg-primary hover:text-secondary delay-100 '>
                    < AiOutlineSearch />
                </button>

            </div>
            {/* < AiOutlineSearch className='sm:hidden block text-secondary text-2xl mt-2'/> */}
         
        {
            isAuthenticated ?
             
           
            <div className='sm:block hidden'>
                <div className='flex flex-row items-center justify-center gap-2'>
                <CiLogout />
                <button
                className='text-lg cursor-pointer'
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >Log Out</button>
                </div>
            </div>

            :

             
              <div className='sm:block hidden'>
              <div className='flex flex-row items-center justify-center gap-2'>
              <FiLogIn />
              <button
              className='text-lg cursor-pointer'
              onClick={() => loginWithRedirect()}
              >LogIn</button>
              </div>
          </div>

        }
      
            
        </div>
    </div>
  )
}

export default Navbar