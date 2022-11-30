import React, { useState } from 'react';


import { IoMdClose } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';

import { Link as Link1 } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';



const NavLinking = () => {
  
       const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)


    return (
    <div name="home"className='w-full h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between item-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>ODUN ESTATE</h1>
                <ul className='hidden md:flex'>
                    <li className='cursor-pointer'><Link2  to="home" smooth={true}  duration={500}  >Home
                        </Link2></li>
                    <li className='cursor-pointer'><Link2  to="about" smooth={true} offset={-200} duration={500} >About 
                    </Link2></li>
                    <li className='cursor-pointer'><Link2  to="support" smooth={true} offset={-50} duration={500}>Support
                    </Link2></li>
                    <li className='cursor-pointer'><Link2  to="all" smooth={true} offset={-100} duration={500} >Platform
                    </Link2></li>

                    <li className='cursor-pointer'><Link2  to="pricing" smooth={true} offset={-50} duration={500}>Pricing
                    </Link2></li>



                   
                </ul>
            </div>
            <div className="hidden md:flex p-4">
                <button  className="border-none bg-transparent text-black mr-4"  ><Link1 to="/SignIn">Sign In</Link1></button>
                <button className="px-8 py-3"><Link1 to="/SignUp">Sign Up</Link1></button>
            </div>
            <div className="md:hidden py-7" onClick={handleClick}>
                {!nav ? <TbMenu2 className='' /> : <IoMdClose />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full h-screen px-8'}>
                    <li><Link2 onClick={handleClose} to="home">Home </Link2></li>
                   
                    <li className='border-b-2 border-zinc-300 w-full h'><Link2 to="about" onClick={handleClose} smooth={true} offset={-200} duration={500}>About 
                    </Link2></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link2  to="support" onClick={handleClose} smooth={true} offset={-50} duration={500}>Support
                    </Link2></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link2  to="all" onClick={handleClose}smooth={true} offset={-100} duration={500}>Platform
                    </Link2></li>

                    <li className='border-b-2 border-zinc-300 w-full'><Link2 to="pricing" onClick={handleClose} smooth={true} offset={-50} duration={500}>Pricing
                    </Link2></li>


             
        <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4" ><Link1 to="/SignIn">Sign In</Link1></button>
            <button className="px-8 py-3"><Link1 to="/SignUp">Sign Up</Link1></button>
        </div>
        </ul>
    
    </div>
  )
}

export default NavLinking;