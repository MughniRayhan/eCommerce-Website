import React, { useState } from 'react'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars,FaHome,FaShoppingBag,FaShoppingCart  } from "react-icons/fa";
import { TbCircleLetterIFilled } from "react-icons/tb";
import { MdContactPage } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiLogIn} from "react-icons/fi";
import { CiLogout,CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";


const Menu = [
  {
    id:1,
    icon: <FaHome />,
    name:"Home",
    link:"/",
  },
  {
    id:2,
    icon:<FaShoppingBag />,
    name:"Shop",
    link:"/shop",
  },
  {
    id:3,
    icon:<FaShoppingCart  />,
    name:"Cart",
    link:"/cart",
  },
  {
    id:4,
    icon:<TbCircleLetterIFilled />,
    name:"About",
    link:"/about",
  },
  {
    id:5,
    icon:<MdContactPage />,
    name:"Contact",
    link:"/contact",
  },
];


function Navbar({search,setSearch,searchProduct}) {
    const { loginWithRedirect , logout, user, isAuthenticated } = useAuth0();
    const [isMenuOpen,setIsMenuOpen]=useState(false);



  return (
    <div className='w-full sticky top-0  bg-white z-50'>
        {/* top_header */}
        <div className='max-w-full flex gap-2 px-2.5 py-2.5 bg-slate-100 '>
          <div className='mt-1 text-xl ml-5 text-gray-500'>
          < MdLocalShipping/>
          </div>
          <div className=' text-gray-500  '>
            <p>Free Shipping When Shopping upto $1000</p>
          </div>
        </div>

        {/* mid-header */}
        <div className='flex py-4 px-8 justify-between max-w-full shadow-md  bg-white'>
            {/* logo */}
            <div >
                <img src="/images/logo.png" alt="" 
                className='h-[50px]  object-cover'
                />
               
            </div>
            {/* searchBox */}
            <div className=' justify-center sm:flex hidden '>
                <input 
                type="text"
                placeholder='Search' 
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}
                
                className='px-2 outline-none rounded-l-md bg-slate-100 
                w-[300px] h-[40px] '
                />
                <Link to='/shop'><button
                onClick={searchProduct}
                className=' outline-none rounded-r-md bg-secondary w-[55px] h-[40px] text-white 
                 cursor-pointer grid place-items-center hover:bg-primary hover:text-secondary delay-100 '>
                    < AiOutlineSearch />
                </button>
</Link>
            </div>
           
         {/* login */}
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
       <div className='sm:hidden sticky bg-white z-40 mt-2 '>
       <button
       className='text-xl '
       onClick={()=>setIsMenuOpen(!isMenuOpen)}>
       {isMenuOpen ? <IoMdClose /> : <FaBars />}
       </button>
       </div>

       { isMenuOpen &&
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/40 z-50 backdrop-blur-sm  '>
               
          <div className=' absolute z-40 bg-white
          rounded shadow-lg w-[350px] h-screen py-4 px-8 top-0 left-0'>
           <div className='flex justify-between border-b-2 border-gray-200 w-full'>
            {/* logo */}
           <div className=' pb-2 ' >
                <img src="/images/logo.png" alt="" 
                className='h-[50px]  object-cover'
                />
            </div>
            <button
       className='text-xl '
       onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        <IoMdClose /> 
       </button>
           </div>

            {/* menu */}
           <div >
           <ul className="flex gap-4 flex-col sm:hidden  py-8 ">
            {Menu.map((data)=>(
            <Link to={data.link}
             key={data.id}
             className=' transition-all  py-2 flex gap-6  hover:bg-primary/70 w-[200px] px-4 rounded-md'
            >
             <span className='text-secondary text-[20px] w-[5px]'> {data.icon}</span>
           <span> {data.name}</span>
            </Link> 
            ))}
           </ul>
           </div>

           {/* login */}
          <div className='px-4 py-4'>
          {
            isAuthenticated ?
            
                <div className='flex flex-row items-center  gap-2'>
                <CiLogout />
                <button
                className='text-lg cursor-pointer'
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >Log Out</button>
                </div>

                :

              <div className='flex flex-row items-center  gap-2'>
              <FiLogIn />
              <button
              className='text-lg cursor-pointer'
              onClick={() => loginWithRedirect()}
              >LogIn</button>
              </div>
          

        }
          </div>
          </div>
          </div>
          
 }
        </div>

        {/* lower navbar */}
        <div className='   overflow-hidden hidden sm:flex justify-between items-center w-full bg-gray-900 px-8 py-2  '>
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
              <div className='flex gap-2 items-center'>
              <div className='text-[16px] bg-white p-2 rounded-md'>
              <CiUser/>
              </div>
              <p className=' text-gray-300'>Please Login</p> 
              </div>
            }
          </div>

           {/* menubar */}
          <div className=''>
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
            <p className=' lg:px-8 md:px-1 py-2 flex justify-center items-center uppercase lg:text-[14px] md:text-[10px] font-semibold'>flat 10% over all iphone</p>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar