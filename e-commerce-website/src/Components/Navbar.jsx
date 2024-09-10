import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiLogIn} from "react-icons/fi";
import { CiLogout,CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";


const Menu = [
  {
    id:1,
    name:"Home",
    link:"/",
  },
  {
    id:2,
    name:"Shop",
    link:"/shop",
  },
  {
    id:3,
    name:"Collection",
    link:"/collection",
  },
  {
    id:4,
    name:"About",
    link:"/about",
  },
  {
    id:5,
    name:"Contact",
    link:"/contact",
  },
];




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
                <input type="text"  placeholder='Search'
                className='px-2 outline-none rounded-l-md bg-slate-100 
                w-[300px] h-[40px] '
                />
                <button className=' outline-none rounded-r-md bg-secondary w-[55px] h-[40px] text-white 
                 cursor-pointer grid place-items-center hover:bg-primary hover:text-secondary delay-100 '>
                    < AiOutlineSearch />
                </button>

            </div>
           
         
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
       {/* toggle bar */}
       <div className='sm:hidden block'>
       <FaBars />
       </div>
            
        </div>

        {/* lower navbar */}
        
        <div className=' fixed hidden sm:flex justify-between w-full bg-gray-900 px-8 py-2  '>
          <div>
            {
              // user profile
              isAuthenticated ?
              <div className='flex  items-center gap-2 '>
              <div  className='text-[16px] bg-white p-2 rounded-md'>
              <CiUser/>
              </div>
             <div >
             <h2 className='text-base text-white font-semibold'>{user.name}</h2>
             <p className='text-[14px] text-gray-400'>{user.email}</p>
             </div>
              </div>
              :
              <div>
              <CiUser className='bg-white px-1 py-1 text-[20px]'/>
              <p>Please Login</p> 
              </div>
            }
          </div>
           {/* menubar */}
          <div className='mt-2'>
          <ul className='flex gap-8 '>
           {Menu.map((data)=>(
             <Link to={data.link}
              key={data.id}
              className='text-white font-semibold transition-all hover:text-primary'
              >
               {data.name}
             </Link> 
           ))}
          </ul>
          </div>

          <div className='bg-primary  rounded-md md:ml-3'>
            <p className='mt-2 lg:px-8 md:px-1 py-1  uppercase lg:text-[14px] md:text-[10px] font-semibold'>flat 10% over all iphone</p>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar